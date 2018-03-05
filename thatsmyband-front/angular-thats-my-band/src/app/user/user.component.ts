import { Component, OnInit } from '@angular/core';
import { User } from '../datamodel/user';
import { UserService } from '../service/user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  user: User;

  constructor(private userService: UserService) { }

  ngOnInit() {
  	this.getUser();
  }

  getUser() : void {
  	this.userService.getUser().subscribe((user) => this.user = user);
  }

}
