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
var CreatePollComponent = (function () {
    function CreatePollComponent(pollsService) {
        this.pollsService = pollsService;
        this.name = '';
        this.option = '';
        this.options = [];
        this.submitted = false;
        this.nameRequired = false;
        this.optRequired = false;
    }
    CreatePollComponent.prototype.addOption = function () {
        if (this.option === '')
            return; // do not add empty options
        for (var i = 0; i < this.options.length; i++) {
            if (this.options[i] === this.option) {
                this.option = '';
                return;
            }
        }
        this.options.push(this.option);
        this.option = '';
        this.optRequired = false;
    };
    CreatePollComponent.prototype.delOption = function (opt) {
        for (var i = 0; i < this.options.length; i++) {
            if (this.options[i] === opt) {
                console.log("deleting option " + opt);
                this.options.splice(i, 1);
            }
        }
    };
    CreatePollComponent.prototype.focusNext = function (el) {
        el.focus();
    };
    CreatePollComponent.prototype.enterName = function () {
        if (!this.name) {
            this.nameRequired = true;
            return;
        }
        else {
            this.nameRequired = false;
        }
    };
    CreatePollComponent.prototype.onSubmit = function () {
        if (!this.name) {
            this.nameRequired = true;
            return;
        }
        else {
            this.nameRequired = false;
        }
        if (this.options.length < 2) {
            this.optRequired = true;
            return;
        }
        else {
            this.optRequired = false;
        }
        var optionsArray = []; //array of arrays [option:votes]
        for (var i = 0; i < this.options.length; i++) {
            var arr = [this.options[i], 0];
            optionsArray.push(arr);
        }
        var newPoll = {
            name: this.name,
            options: optionsArray,
            author: this.pollsService.userID
        };
        this.submitted = true;
        //console.log('Poll name ='+this.name+', and the options are:'+this.options);
        //service goes here
        this.pollsService.addPoll(newPoll).subscribe(function (poll) {
            console.log(poll);
        });
        this.pollsService.addPollButton = 'Ok';
    };
    CreatePollComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'createpoll',
            templateUrl: 'createpoll.component.html'
        }), 
        __metadata('design:paramtypes', [polls_service_1.PollsService])
    ], CreatePollComponent);
    return CreatePollComponent;
}());
exports.CreatePollComponent = CreatePollComponent;
//# sourceMappingURL=createpoll.component.js.map