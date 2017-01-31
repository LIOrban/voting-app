import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PollsComponent } from './components/polls/polls.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';

const appRoutes: Routes=[
    {path:"", component:PollsComponent},
    {path:"dashboard", component:DashboardComponent}
    ];
    
export const appRoutingProviders:any[]=[];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);