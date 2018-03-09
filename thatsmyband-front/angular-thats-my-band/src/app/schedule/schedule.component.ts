import { Component, OnInit } from '@angular/core';

import { User } from '../datamodel/user';
import { UserService } from '../service/user.service';

import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-schedule',
  templateUrl: './schedule.component.html',
  styleUrls: ['./schedule.component.css']
})
export class ScheduleComponent implements OnInit {

  user: User;
  
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
