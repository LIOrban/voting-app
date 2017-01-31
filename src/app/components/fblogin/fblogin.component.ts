import { Component } from '@angular/core'; //, OnInit
import { PollsService } from '../../services/polls/polls.service';


declare const FB:any;

@Component({
    moduleId: module.id,
    selector: 'facebook-login',
    templateUrl: 'fblogin.component.html'

})

export class FacebookLoginComponent {  //implements OnInit
    status:string;
    constructor(private pollsService: PollsService) {
        FB.init({
            appId      : '576786575843742',
            cookie     : false,  // enable cookies to allow the server to access
                            // the session
            xfbml      : true,  // parse social plugins on this page
            version    : 'v2.5' // use graph api version 2.5
        });
    }

    onFacebookLoginClick() {
        FB.getLoginStatus(response => {
            this.statusChange(response);
        });                             
        if (this.status!=='connected') {
            FB.login(response => {
                if (response.status === 'connected') {
                // Logged into your app and Facebook.
                if (response.authResponse.userID) {this.pollsService.userID=response.authResponse.userID;}
                
                console.log('Connected');
                this.pollsService.fbButton='Logout';
                
                } else if (response.status === 'not_authorized') {
                // The person is logged into Facebook, but not your app.
                } else {
                // The person is not logged into Facebook, so we're not sure if
                // they are logged into this app or not.
                }
            });
        }
        else if (this.status=='connected') {
            FB.logout(response => {
                // Person is now logged out
                console.log('Logged out')
                this.pollsService.fbButton='Login with Facebook';
            });            
        }
    }
    
    statusChange(resp) {
        if (resp.status === 'connected') {
            //console.log('connected '+resp.authResponse.userID);
            this.status='connected';// connect here with your server for facebook login by passing access token given by facebook
        }else if (resp.status === 'not_authorized') {
            this.status='not authorized';
            //console.log('status : not authorized');
        }else {
            //this.status='not connected y'+resp.status;
            //console.log('status : NOT Connected');
            this.status='unknown';
        }
    }
}