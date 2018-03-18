import { Component, OnInit } from '@angular/core';

import { User } from '../datamodel/user';
import { UserService } from '../service/user.service';
import { GenericEvent } from '../datamodel/genericEvent';

import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-schedule',
  templateUrl: './schedule.component.html',
  styleUrls: ['./schedule.component.css']
})
export class ScheduleComponent implements OnInit {

  nextEvents: Array<GenericEvent>;
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
  	this.userService.getUser().subscribe((user) => { 
      this.user = user;
      this.nextEvents  = new Array<GenericEvent>(5).fill(null).map((x,i) => {
          var index = Number(i) + Number(user.CurrentTime); 
          if(index < user.Band.Schedule.GenericEvents.length) {
            return user.Band.Schedule.GenericEvents[index];
          } else {
            return new GenericEvent();
          }
        });
      }
    );
  }
}
