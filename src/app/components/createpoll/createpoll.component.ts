import { Component } from '@angular/core';
import { PollsService } from '../../services/polls/polls.service';
@Component ({
    moduleId: module.id,
    selector: 'createpoll',
    templateUrl: 'createpoll.component.html'
})
export class CreatePollComponent {
    constructor(private pollsService: PollsService) {}
    name='';
    option='';
    options=[];
    submitted=false;
    nameRequired=false;
    optRequired=false;
    addOption() {
        if (this.option==='') return; // do not add empty options
        
        for (let i=0; i<this.options.length; i++) { // do not add duplicate options
            if (this.options[i]===this.option) {
                this.option='';
                return;
            }
        }
        
        this.options.push(this.option);
        this.option='';
        this.optRequired=false;      
    } 
    
    delOption(opt) {
        
        for (let i=0; i<this.options.length; i++) {
            if (this.options[i]===opt) {
                console.log("deleting option "+opt);
                this.options.splice(i,1);
            }
        }
    }
    
    focusNext(el) {
        el.focus();
    }
    enterName() {
        if (!this.name) {
            this.nameRequired=true;
            return;
        }
        else {this.nameRequired=false;}
    }
    
    onSubmit() {
        if (!this.name) {
            this.nameRequired=true;
            return;
        }
        else {this.nameRequired=false;}
        
        if (this.options.length<2) {
            this.optRequired=true;
            return;
        }
        else {this.optRequired=false;}


        let optionsArray=[]; //array of arrays [option:votes]
        for (let i=0;i<this.options.length;i++) {
            let arr=[this.options[i],0];
            optionsArray.push(arr);
        }        
        
        
        let newPoll={
            name: this.name,
            options: optionsArray,
            author: this.pollsService.userID
        };
        
        
        this.submitted=true;
        //console.log('Poll name ='+this.name+', and the options are:'+this.options);
        //service goes here
        this.pollsService.addPoll(newPoll).subscribe((poll)=> {
            console.log(poll);
        });

        this.pollsService.addPollButton='Ok';        
    }
}