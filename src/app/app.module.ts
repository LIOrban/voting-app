import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { FormsModule }   from '@angular/forms';
import { AppComponent } from './app.component';
import { PollsComponent } from './components/polls/polls.component';
import { CreatePollComponent } from './components/createpoll/createpoll.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { MyPollsComponent } from './components/mypolls/mypolls.component';
import { PollComponent } from './components/poll/poll.component';
import { routing, appRoutingProviders } from './app.routing';
import { ChartsModule } from '../node_modules/ng2-charts/ng2-charts.js';
import { AddOptionComponent } from './components/addoption/addoption.component';
import { FacebookLoginComponent } from './components/fblogin/fblogin.component'

@NgModule({
  imports:      [ BrowserModule, HttpModule, FormsModule, routing, ChartsModule ],
  declarations: [AppComponent, PollsComponent, CreatePollComponent, DashboardComponent, MyPollsComponent, PollComponent, AddOptionComponent, FacebookLoginComponent],
  bootstrap: [AppComponent],
  providers: [appRoutingProviders]
})
export class AppModule { }
