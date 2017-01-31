import { Component } from '@angular/core';
import { PollsService } from '../../services/polls/polls.service';


@Component({
    moduleId:module.id,
    selector: 'dashboard',
    templateUrl: 'dashboard.component.html'
})
export class DashboardComponent {
    constructor(private pollsService: PollsService) {}

    
    add() {
        this.pollsService.showAddPoll=!this.pollsService.showAddPoll;
        this.pollsService.addPollButton=this.pollsService.showAddPoll?'Cancel':'Add new poll';
    }
    
}