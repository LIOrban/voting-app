import { Component } from '@angular/core';
import { PollsService } from '../../services/polls/polls.service';

@Component({
    moduleId: module.id,
    selector: 'mypolls',
    templateUrl: 'mypolls.component.html'
})
export class MyPollsComponent {
    constructor(private pollsService: PollsService) {
        pollsService.getMyPolls().subscribe((polls)=>this.mypolls=polls);
    }
    mypolls:any[];
    toggleAddOption:boolean=false;
    
    onSelect(poll) {
        this.toggleAddOption=false;
        this.name=poll.name;
        this.options=poll.options;
        if (this.selectedId===poll["_id"]) {this.selectedId=0;}
        else {this.selectedId=poll["_id"];}
        console.log("selected "+poll);
    };
    
    deletePoll(poll) {
        this.pollsService.deletePoll(poll["_id"]).subscribe((poll)=> {
        });  
        let i=this.mypolls.indexOf(poll);
        let mypollsTemp=this.mypolls;
        mypollsTemp.splice(i,1);
        this.mypolls = mypollsTemp;      
    };
    
    addOption(poll) {
        console.log("Add option to poll "+poll);
        if (!this.toggleAddOption) {this.toggleAddOption=poll["_id"];}
        else {this.toggleAddOption=false;}
        //service goes here
        //this.pollsService.updatePoll(poll["_id"],votes).subscribe((poll)=> {
            
        //});          
    };
    
    okAfterAddOption() {
        if (!this.toggleAddOption || !this.pollsService.hasAddedNewOption || this.pollsService.newOption=="") return;
        this.toggleAddOption=false;
        this.pollsService.hasAddedNewOption=false;
        let newOption=this.pollsService.newOption;
        let tempOptions=this.options;
        tempOptions.push([newOption,0]);
        this.options=tempOptions;
    }
    
    selectedId;
    name; 
    options;
}
