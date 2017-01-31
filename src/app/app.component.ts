import { Component } from '@angular/core';
import { PollsService } from './services/polls/polls.service';

@Component({
    moduleId: module.id,
    selector: 'my-app',
    templateUrl: 'app.component.html',
    providers: [PollsService]
})

export class AppComponent { }
