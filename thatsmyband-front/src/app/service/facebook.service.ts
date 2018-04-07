import { Injectable, OnInit } from '@angular/core';

declare const FB: any;

@Injectable()
export class FacebookService{

  	token: any;
	loged: boolean = false;
	user = { name: 'Hello' , id: '' };

	constructor() {

	}

	init(connectionCallBack) {
		FB.init({
        	appId      : '793344530828539',
        	cookie     : false, 
        	xfbml      : true,  // parse social plugins on this page
        	version    : 'v2.5' // use graph api version 2.5
    	});

	    FB.getLoginStatus(response => {
	        this.statusChangeCallback(response);
	        connectionCallBack(this.token, this.user.name, this.user.id);
	    });
	 }

	statusChangeCallback(response: any) {
	    if (response.status === 'connected') {
	        console.log('connected');
	    } else {
	        this.login();
	    }
	}

	login() {
	  FB.login((result: any) => {
	    this.loged = true;
	    this.token = result;
	  }, { scope: 'user_friends' });
	}

	me() {
	    FB.api('/me?fields=id,name,first_name,gender,picture.width(150).height(150),age_range,friends',
	        function(result) {
	            if (result && !result.error) {
	                this.user = result;
	                console.log(this.user);
	            } else {
	                console.log(result.error);
	            }
	        });
	}
}
