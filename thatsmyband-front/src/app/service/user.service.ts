import { Injectable } from '@angular/core';
import { UserData } from '../datamodel/userData';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { catchError, map, tap } from 'rxjs/operators';

import { FacebookService } from './facebook.service';

@Injectable()
export class UserService {

  userId = 'Empty';
  userToken = 'Empty';
  userName = 'Empty';
  isUserConnectedIntoFacebook = false;
  isUserAlreadyExisting = false;
  user: UserData;

  private userUrl = "http://localhost:3000/userdata";

  constructor(
  	private http: HttpClient,
  	private facebookService: FacebookService
  	) { 
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

  getUser() : Observable<UserData> {
  	return this.http.get<UserData>(this.userUrl, {headers: new HttpHeaders({'Content-Type': 'application/json', 'UserId': this.userId, 'UserToken': this.userToken})}).pipe();
  }
}
