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
var core_1 = require('@angular/core'); //, Output, EventEmitter
var polls_service_1 = require('../../services/polls/polls.service');
var PollComponent = (function () {
    function PollComponent(pollsService) {
        this.pollsService = pollsService;
        this.doughnutChartType = 'doughnut';
    }
    ;
    PollComponent.prototype.ngOnInit = function () {
        this.id = this.pid;
        if (localStorage.getItem(this.id) == '1') {
            this.voted = -2;
        }
        else {
            this.voted = -1;
        }
        this.data = this.options.map(function (arr) { return parseInt(arr[1]); });
        this.doughnutChartLabels = this.options.map(function (arr) { return arr[0]; }); //+" "+arr[1]
        this.doughnutChartData = this.newData ? this.newData : this.options.map(function (arr) { return parseInt(arr[1]); });
    };
    PollComponent.prototype.ngOnChange = function () {
        this.id = this.pid;
        if (localStorage.getItem(this.id) == '1') {
            this.voted = -2;
        }
        else {
            this.voted = -1;
        }
        this.data = this.options.map(function (arr) { return parseInt(arr[1]); });
        this.doughnutChartLabels = this.options.map(function (arr) { return arr[0]; }); //+" "+arr[1]
        this.doughnutChartData = this.newData ? this.newData : this.options.map(function (arr) { return parseInt(arr[1]); });
    };
    // events
    PollComponent.prototype.chartClicked = function (e) {
        if (this.voted === -1) {
            this.voted = e.active[0]["_index"];
            this.data[this.voted]++;
            this.options[this.voted][1]++;
            this.doughnutChartData = this.data;
            this.newData = this.data;
            localStorage.setItem(this.id, '1');
        }
        var votes = [];
        for (var i = 0; i < this.data.length; i++) {
            votes.push([this.doughnutChartLabels[i], this.data[i]]);
        }
        //service goes here
        this.pollsService.updatePoll(this.id, votes).subscribe(function (poll) {
            //console.log(poll);
        });
    };
    PollComponent.prototype.chartHovered = function (e) {
        //console.log(e);
    };
    PollComponent.prototype.vote = function (votedOption) {
        //console.log("votedOption "+votedOption);
        if (this.voted === -1) {
            this.data = this.options.map(function (arr) { return parseInt(arr[1]); });
            this.doughnutChartLabels = this.options.map(function (arr) { return arr[0]; }); //+" "+arr[1]
            this.doughnutChartData = this.newData ? this.newData : this.options.map(function (arr) { return parseInt(arr[1]); });
            this.voted = this.options.indexOf(votedOption);
            this.data[this.voted]++;
            this.options[this.voted][1]++;
            this.doughnutChartData = this.data;
            this.newData = this.data;
            localStorage.setItem(this.id, '1');
        }
        var votes = [];
        for (var i = 0; i < this.data.length; i++) {
            votes.push([this.doughnutChartLabels[i], this.data[i]]);
        }
        //service goes here
        this.pollsService.updatePoll(this.id, votes).subscribe(function (poll) {
            //console.log(poll);
        });
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', String)
    ], PollComponent.prototype, "name", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Array)
    ], PollComponent.prototype, "options", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', String)
    ], PollComponent.prototype, "pid", void 0);
    PollComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'poll',
            templateUrl: 'poll.component.html'
        }), 
        __metadata('design:paramtypes', [polls_service_1.PollsService])
    ], PollComponent);
    return PollComponent;
}());
exports.PollComponent = PollComponent;
//# sourceMappingURL=poll.component.js.map