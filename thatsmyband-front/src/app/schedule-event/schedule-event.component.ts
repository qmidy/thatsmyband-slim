import { Component, OnInit } from '@angular/core';

import { UserData } from '../datamodel/userData';
import { UserService } from '../service/user.service';

import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-schedule-event',
  templateUrl: './schedule-event.component.html',
  styleUrls: ['./schedule-event.component.css']
})
export class ScheduleEventComponent implements OnInit {

  eventId : String;
  user: UserData;

  constructor(
  	private route: ActivatedRoute,
  	private userService: UserService,
  	private location: Location
  	) { }

  ngOnInit() {
  	this.eventId = this.route.snapshot.paramMap.get('id');
  	this.getUser();
  }

  getUser() : void {
  	this.userService.getUser().subscribe((user) => this.user = user);
  }

}
