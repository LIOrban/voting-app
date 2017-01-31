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
var AddOptionComponent = (function () {
    function AddOptionComponent(pollsService) {
        this.pollsService = pollsService;
        this.newOption = "";
        this.added = false;
    }
    AddOptionComponent.prototype.ngOnInit = function () {
        this.id = this.pid;
        this.data = this.options.map(function (arr) { return arr; });
        //this.doughnutChartLabels = this.options.map(function(arr) {return arr[0];}); //+" "+arr[1]
        //this.doughnutChartData = this.newData? this.newData : this.options.map(function(arr) {return parseInt(arr[1]);});
    };
    AddOptionComponent.prototype.addOption = function () {
        if (this.newOption == "")
            return; // prevent empty string options
        for (var i = 0; i < this.data.length; i++) {
            if (this.newOption == this.data[i][0])
                return; // prevent adding duplicates
        }
        var votes = this.data;
        votes.push([this.newOption, 0]);
        console.log(votes);
        this.pollsService.updatePoll(this.id, votes).subscribe(function (poll) { });
        this.added = true;
        this.pollsService.hasAddedNewOption = true;
        this.pollsService.newOption = this.newOption;
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', String)
    ], AddOptionComponent.prototype, "name", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Array)
    ], AddOptionComponent.prototype, "options", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', String)
    ], AddOptionComponent.prototype, "pid", void 0);
    AddOptionComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'addoption',
            templateUrl: 'addoption.component.html'
        }), 
        __metadata('design:paramtypes', [polls_service_1.PollsService])
    ], AddOptionComponent);
    return AddOptionComponent;
}());
exports.AddOptionComponent = AddOptionComponent;
//# sourceMappingURL=addoption.component.js.map