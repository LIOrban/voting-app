"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var polls_service_1 = require('../../services/polls/polls.service');
var MyPollsComponent = (function () {
    function MyPollsComponent(pollsService) {
        var _this = this;
        this.pollsService = pollsService;
        this.toggleAddOption = false;
        pollsService.getMyPolls().subscribe(function (polls) { return _this.mypolls = polls; });
    }
    MyPollsComponent.prototype.onSelect = function (poll) {
        this.toggleAddOption = false;
        this.name = poll.name;
        this.options = poll.options;
        if (this.selectedId === poll["_id"]) {
            this.selectedId = 0;
        }
        else {
            this.selectedId = poll["_id"];
        }
        console.log("selected " + poll);
    };
    ;
    MyPollsComponent.prototype.deletePoll = function (poll) {
        this.pollsService.deletePoll(poll["_id"]).subscribe(function (poll) {
        });
        var i = this.mypolls.indexOf(poll);
        var mypollsTemp = this.mypolls;
        mypollsTemp.splice(i, 1);
        this.mypolls = mypollsTemp;
    };
    ;
    MyPollsComponent.prototype.addOption = function (poll) {
        console.log("Add option to poll " + poll);
        if (!this.toggleAddOption) {
            this.toggleAddOption = poll["_id"];
        }
        else {
            this.toggleAddOption = false;
        }
        //service goes here
        //this.pollsService.updatePoll(poll["_id"],votes).subscribe((poll)=> {
        //});          
    };
    ;
    MyPollsComponent.prototype.okAfterAddOption = function () {
        if (!this.toggleAddOption || !this.pollsService.hasAddedNewOption || this.pollsService.newOption == "")
            return;
        this.toggleAddOption = false;
        this.pollsService.hasAddedNewOption = false;
        var newOption = this.pollsService.newOption;
        var tempOptions = this.options;
        tempOptions.push([newOption, 0]);
        this.options = tempOptions;
    };
    MyPollsComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'mypolls',
            templateUrl: 'mypolls.component.html'
        }), 
        __metadata('design:paramtypes', [polls_service_1.PollsService])
    ], MyPollsComponent);
    return MyPollsComponent;
}());
exports.MyPollsComponent = MyPollsComponent;
//# sourceMappingURL=mypolls.component.js.map