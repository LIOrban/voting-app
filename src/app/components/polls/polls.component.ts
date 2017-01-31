import { Component } from '@angular/core';
import { PollsService } from '../../services/polls/polls.service';

@Component({
    moduleId: module.id,
    selector: 'polls',
    templateUrl: 'polls.component.html',
})
export class PollsComponent {
    constructor(private pollsService: PollsService) {
        pollsService.getPolls().subscribe((polls)=> this.polls=polls);
    }
    polls: any[];
    selectedId;
    name; 
    options;    
    onSelect(poll) {
        this.name=poll.name;
        this.options=poll.options;
        if (this.selectedId===poll["_id"]) {this.selectedId=0;}
        else {this.selectedId=poll["_id"];}
    };
}