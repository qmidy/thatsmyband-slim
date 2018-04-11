import { Component, OnInit } from '@angular/core';

import { FacebookService } from './service/facebook.service';

import { UserData } from './datamodel/userData';
import { UserService } from './service/user.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {

  title = 'That\'s my band';
  isUserConnectedIntoFacebook = false;
  isUserAlreadyExisting = false;

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
      this.isUserConnectedIntoFacebook = true;
      this.facebookService.me(this)
    }
    else {
      // Si l'utilisateur n'est pas connecté à facebook
      this.isUserConnectedIntoFacebook = false
    }
  }

  facebookUserDataUpdate(user) {
    // Si l'utilisateur est connecté à Facebook, on vérifie que son compte existe ou non
    this.getUser();
  }

  // Gestion de l'utilisateur
  getUser() {
    this.userService.getUser().subscribe((user) => {
        if(user != null)
        {
          this.isUserAlreadyExisting = true;
          console.log("l'utilsateur a déjà un compte");
        }
        console.log("l'utilisateur n'a pas de compte");
      });
  }
}

