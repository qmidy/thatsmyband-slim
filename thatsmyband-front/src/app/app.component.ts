import { Component, OnInit } from '@angular/core';
import { FacebookService } from './service/facebook.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {

  title = 'That\'s my band';
  userId = 'Empty';
  userToken = 'Empty';
  userName = 'Empty';
  isUserConnectedIntoFacebook = false;

  constructor(
  	private facebookService: FacebookService
  	) { }

  ngOnInit() {
  	this.facebookService.init(this);
  }

  facebookConnectionCallBack(response) {
    if (response.status === 'connected') {
      this.userToken = response.authResponse.accessToken;
      this.facebookService.me(this);
      this.isUserConnectedIntoFacebook = true;
    }
    else
    {
      // Si l'utilisateur n'est pas connecté à facebook
      this.isUserConnectedIntoFacebook = false
    }
  }

  facebookUserDataUpdate(user) {
    this.userId = user.id;
    this.userName = user.name;
  }
}

