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
var platform_browser_1 = require('@angular/platform-browser');
var http_1 = require('@angular/http');
var forms_1 = require('@angular/forms');
var app_component_1 = require('./app.component');
var polls_component_1 = require('./components/polls/polls.component');
var createpoll_component_1 = require('./components/createpoll/createpoll.component');
var dashboard_component_1 = require('./components/dashboard/dashboard.component');
var mypolls_component_1 = require('./components/mypolls/mypolls.component');
var poll_component_1 = require('./components/poll/poll.component');
var app_routing_1 = require('./app.routing');
var ng2_charts_js_1 = require('../node_modules/ng2-charts/ng2-charts.js');
var addoption_component_1 = require('./components/addoption/addoption.component');
var fblogin_component_1 = require('./components/fblogin/fblogin.component');
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            imports: [platform_browser_1.BrowserModule, http_1.HttpModule, forms_1.FormsModule, app_routing_1.routing, ng2_charts_js_1.ChartsModule],
            declarations: [app_component_1.AppComponent, polls_component_1.PollsComponent, createpoll_component_1.CreatePollComponent, dashboard_component_1.DashboardComponent, mypolls_component_1.MyPollsComponent, poll_component_1.PollComponent, addoption_component_1.AddOptionComponent, fblogin_component_1.FacebookLoginComponent],
            bootstrap: [app_component_1.AppComponent],
            providers: [app_routing_1.appRoutingProviders]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map