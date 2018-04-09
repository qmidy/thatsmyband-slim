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

  constructor(
  	private facebookService: FacebookService
  	) { }

  ngOnInit() {
  	this.facebookService.init(this);
  }

  facebookConnectionCallBack() {
    this.facebookService.me(this);
  }

  facebookUserDataUpdate(user) {
    this.userId = user.id;
    this.userName = user.name;
  }

  facebookTokenUpdate(token) {
    this.userToken = token;
  }
}

