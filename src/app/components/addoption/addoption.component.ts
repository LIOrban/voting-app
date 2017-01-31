import { Component, Input } from '@angular/core';
import { PollsService } from '../../services/polls/polls.service';

@Component({
    moduleId: module.id,
    selector: 'addoption',
    templateUrl: 'addoption.component.html'
})
export class AddOptionComponent{
    @Input() name:string;
    @Input() options: any[];
    @Input() pid:string;
    constructor(private pollsService: PollsService) {}
    id:string;
    data: any[];
    newOption:string="";
    added:boolean=false;
    
    ngOnInit() {
        this.id=this.pid;
        this.data = this.options.map(function(arr) {return arr;});
        //this.doughnutChartLabels = this.options.map(function(arr) {return arr[0];}); //+" "+arr[1]
        //this.doughnutChartData = this.newData? this.newData : this.options.map(function(arr) {return parseInt(arr[1]);});
    }    
    
    addOption() {
        if (this.newOption=="") return; // prevent empty string options
        for (let i=0;i<this.data.length;i++) {
            if (this.newOption==this.data[i][0]) return; // prevent adding duplicates
        }
        
        let votes=this.data;
        votes.push([this.newOption,0]); console.log(votes);
        this.pollsService.updatePoll(this.id,votes).subscribe((poll)=> {});  
        this.added=true;
        this.pollsService.hasAddedNewOption=true;
        this.pollsService.newOption=this.newOption;
    }
    
}