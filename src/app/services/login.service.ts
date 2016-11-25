import {Observable} from "rxjs/Observable";
import {Injectable} from "@angular/core";
import {Response} from "@angular/http";
import {Subject} from "rxjs/Rx";
declare var Trello;

@Injectable()
export class LoginService {

isLogged: boolean;

  constructor() {
  }
  
  ngOnInit() {
    this.isLogged = false;
  }
  login(): boolean {
    Trello.authorize({
      type: 'popup',
      name: 'Trello Angular App',
      scope: {
        read: 'true',
        write: 'true'
      },
      expiration: 'never',
      success: () => {
        this.isLogged = true;
      },
      error: () => {
        this.isLogged = false;
      },
    });
    return this.isLogged;
  }
 
  logout(): boolean {
    Trello.deauthorize();
    return this.isLogged = false;
  }

  isSignedIn(): boolean {
    return this.isLogged;
  }

  getMyToken() {
    var token = Trello.token();
    alert(token);
  }

}