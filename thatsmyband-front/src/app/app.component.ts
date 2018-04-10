import { Component, OnInit } from '@angular/core';

import { FacebookService } from './service/facebook.service';

import { User } from './datamodel/user';
import { UserService } from './service/user.service';


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
  isUserAlreadyExisting = false;
  user;

  constructor(
    private userService: UserService,
  	private facebookService: FacebookService
  	) { }

  ngOnInit() {
  	this.facebookService.init(this);
  }

  // Gestion de la connection à Facebook
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
    // Si l'utilisateur est connecté à Facebook, on vérifie que son compte existe ou non
    this.getUser();
  }

  // Gestion de l'utilisateur
  getUser() : void {
    this.userService.getUser(this.userId, this.userToken).subscribe((user) => {
        this.user = user;
        if(this.user != null)
          this.isUserAlreadyExisting = true;
      });
  }
}

