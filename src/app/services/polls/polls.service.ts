//
// Post Redirect Get - Session variable on server!
// Angular routing
// LocalStorage
//


import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable ()
export class PollsService {
    constructor(private http: Http) {}
    added=false;
    showAddPoll=false;
    addPollButton:string='Add new poll';
    newOption:string='';
    hasAddedNewOption=false;
    fbButton:string='Login with Facebook';
    userID:string='';
    
    getPolls() {
        return this.http.get("/api/polls").map((res)=>res.json());
    }
    
    getMyPolls() {
        let url="/api/polls/user/"+this.userID;
        return this.http.get(url).map((res)=>res.json());
    }
    
    addPoll(newPoll) {
        let headers= new Headers;
        headers.append("Content-Type", "application/json");
        return this.http.post("/api/add", JSON.stringify(newPoll), {headers:headers}).map((res)=>res.json());
    }
    
    getPoll(id) {
        let url="/api/poll/"+id;
        return this.http.get(url).map((res)=>res.json());
    }
    
    updatePoll(id,votes) {
        let headers= new Headers;
        let url="/api/poll/"+id;
        headers.append("Content-Type", "application/json");
        return this.http.put(url, JSON.stringify(votes), {headers:headers}).map((res)=>res.json());        
    }
    
    deletePoll(id) {
        let url="/api/poll/"+id.toString();
        return this.http.delete(url).map(res=>res.json());
    }
}