//
// Post Redirect Get - Session variable on server!
// Angular routing
// LocalStorage
//
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
var http_1 = require('@angular/http');
require('rxjs/add/operator/map');
var PollsService = (function () {
    function PollsService(http) {
        this.http = http;
        this.added = false;
        this.showAddPoll = false;
        this.addPollButton = 'Add new poll';
        this.newOption = '';
        this.hasAddedNewOption = false;
        this.fbButton = 'Login with Facebook';
        this.userID = '';
    }
    PollsService.prototype.getPolls = function () {
        return this.http.get("/api/polls").map(function (res) { return res.json(); });
    };
    PollsService.prototype.getMyPolls = function () {
        var url = "/api/polls/user/" + this.userID;
        return this.http.get(url).map(function (res) { return res.json(); });
    };
    PollsService.prototype.addPoll = function (newPoll) {
        var headers = new http_1.Headers;
        headers.append("Content-Type", "application/json");
        return this.http.post("/api/add", JSON.stringify(newPoll), { headers: headers }).map(function (res) { return res.json(); });
    };
    PollsService.prototype.getPoll = function (id) {
        var url = "/api/poll/" + id;
        return this.http.get(url).map(function (res) { return res.json(); });
    };
    PollsService.prototype.updatePoll = function (id, votes) {
        var headers = new http_1.Headers;
        var url = "/api/poll/" + id;
        headers.append("Content-Type", "application/json");
        return this.http.put(url, JSON.stringify(votes), { headers: headers }).map(function (res) { return res.json(); });
    };
    PollsService.prototype.deletePoll = function (id) {
        var url = "/api/poll/" + id.toString();
        return this.http.delete(url).map(function (res) { return res.json(); });
    };
    PollsService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], PollsService);
    return PollsService;
}());
exports.PollsService = PollsService;
//# sourceMappingURL=polls.service.js.map