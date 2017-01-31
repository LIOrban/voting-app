import { Component, Input } from '@angular/core'; //, Output, EventEmitter
import { PollsService } from '../../services/polls/polls.service';

@Component({
    moduleId:module.id,
    selector:'poll',
    templateUrl:'poll.component.html'
})
export class PollComponent {
    @Input() name:string;
    @Input() options: any[];
    @Input() pid:string;
   
    constructor(private pollsService: PollsService){};
    
    public doughnutChartLabels:string[];
    public doughnutChartData;
    public doughnutChartType:string = 'doughnut';
    public voted:number;
    public data:number[];
    public newData;
    public id:string;

    ngOnInit() {
        this.id=this.pid;
        if (localStorage.getItem(this.id)=='1') {
            this.voted = -2;
        } else {
            this.voted = -1;
        }
        this.data = this.options.map(function(arr) {return parseInt(arr[1]);});
        this.doughnutChartLabels = this.options.map(function(arr) {return arr[0];}); //+" "+arr[1]
        this.doughnutChartData = this.newData? this.newData : this.options.map(function(arr) {return parseInt(arr[1]);});
    } 

    ngOnChange() {
        this.id=this.pid;
        if (localStorage.getItem(this.id)=='1') {
            this.voted = -2;
        } else {
            this.voted = -1;
        }
        this.data = this.options.map(function(arr) {return parseInt(arr[1]);});
        this.doughnutChartLabels = this.options.map(function(arr) {return arr[0];}); //+" "+arr[1]
        this.doughnutChartData = this.newData? this.newData : this.options.map(function(arr) {return parseInt(arr[1]);});
    }

    // events
    public chartClicked(e:any):void {
        if (this.voted===-1) {
            this.voted=e.active[0]["_index"];
            this.data[this.voted]++;
            this.options[this.voted][1]++;
            this.doughnutChartData=this.data;
            this.newData=this.data;
            localStorage.setItem(this.id,'1');
        }
        
        let votes=[];
        for(let i=0; i<this.data.length; i++) {
            votes.push([this.doughnutChartLabels[i], this.data[i]]);
        }

        //service goes here
        this.pollsService.updatePoll(this.id,votes).subscribe((poll)=> {
            //console.log(poll);
        });    
    }
    
    public chartHovered(e:any):void {
    //console.log(e);
    }


    vote(votedOption:any) {
        //console.log("votedOption "+votedOption);
        if (this.voted===-1) {
            this.data = this.options.map(function(arr) {return parseInt(arr[1]);});
            this.doughnutChartLabels = this.options.map(function(arr) {return arr[0];}); //+" "+arr[1]
            this.doughnutChartData = this.newData? this.newData : this.options.map(function(arr) {return parseInt(arr[1]);});        
            this.voted=this.options.indexOf(votedOption);
            this.data[this.voted]++;
            this.options[this.voted][1]++;
            this.doughnutChartData=this.data;
            this.newData=this.data;
            localStorage.setItem(this.id,'1');
        }

        let votes=[];
        for(let i=0; i<this.data.length; i++) {
            votes.push([this.doughnutChartLabels[i], this.data[i]]);
        }
    
        //service goes here
        this.pollsService.updatePoll(this.id,votes).subscribe((poll)=> {
            //console.log(poll);
        });        
    }
}