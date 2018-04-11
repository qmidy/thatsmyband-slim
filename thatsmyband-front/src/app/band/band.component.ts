import { Component, OnInit } from '@angular/core';

import { UserData } from '../datamodel/userData';
import { UserService } from '../service/user.service';

import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-band',
  templateUrl: './band.component.html',
  styleUrls: ['./band.component.css']
})
export class BandComponent implements OnInit {

  user: UserData;

  constructor(
  	private route: ActivatedRoute,
  	private userService: UserService,
  	private location: Location
  	) { }

  ngOnInit() {
  	this.getUser();
  }

  getUser() : void {
  	this.userService.getUser().subscribe((user) => this.user = user);
  }

}
