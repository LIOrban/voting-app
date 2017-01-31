"use strict";
var router_1 = require('@angular/router');
var polls_component_1 = require('./components/polls/polls.component');
var dashboard_component_1 = require('./components/dashboard/dashboard.component');
var appRoutes = [
    { path: "", component: polls_component_1.PollsComponent },
    { path: "dashboard", component: dashboard_component_1.DashboardComponent }
];
exports.appRoutingProviders = [];
exports.routing = router_1.RouterModule.forRoot(appRoutes);
//# sourceMappingURL=app.routing.js.map