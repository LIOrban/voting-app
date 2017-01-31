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
var core_1 = require('@angular/core'); //, OnInit
var polls_service_1 = require('../../services/polls/polls.service');
var FacebookLoginComponent = (function () {
    function FacebookLoginComponent(pollsService) {
        this.pollsService = pollsService;
        FB.init({
            appId: '576786575843742',
            cookie: false,
            // the session
            xfbml: true,
            version: 'v2.5' // use graph api version 2.5
        });
    }
    FacebookLoginComponent.prototype.onFacebookLoginClick = function () {
        var _this = this;
        FB.getLoginStatus(function (response) {
            _this.statusChange(response);
        });
        if (this.status !== 'connected') {
            FB.login(function (response) {
                if (response.status === 'connected') {
                    // Logged into your app and Facebook.
                    if (response.authResponse.userID) {
                        _this.pollsService.userID = response.authResponse.userID;
                    }
                    console.log('Connected');
                    _this.pollsService.fbButton = 'Logout';
                }
                else if (response.status === 'not_authorized') {
                }
                else {
                }
            });
        }
        else if (this.status == 'connected') {
            FB.logout(function (response) {
                // Person is now logged out
                console.log('Logged out');
                _this.pollsService.fbButton = 'Login with Facebook';
            });
        }
    };
    FacebookLoginComponent.prototype.statusChange = function (resp) {
        if (resp.status === 'connected') {
            //console.log('connected '+resp.authResponse.userID);
            this.status = 'connected'; // connect here with your server for facebook login by passing access token given by facebook
        }
        else if (resp.status === 'not_authorized') {
            this.status = 'not authorized';
        }
        else {
            //this.status='not connected y'+resp.status;
            //console.log('status : NOT Connected');
            this.status = 'unknown';
        }
    };
    FacebookLoginComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'facebook-login',
            templateUrl: 'fblogin.component.html'
        }), 
        __metadata('design:paramtypes', [polls_service_1.PollsService])
    ], FacebookLoginComponent);
    return FacebookLoginComponent;
}());
exports.FacebookLoginComponent = FacebookLoginComponent;
//# sourceMappingURL=fblogin.component.js.map