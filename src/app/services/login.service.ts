import {Observable} from "rxjs/Observable";
import {Injectable} from "@angular/core";
import {Response} from "@angular/http";
import {Subject} from "rxjs/Rx";
declare var Trello;

@Injectable()
export class LoginService {

  private authEvents: Subject<AuthEvent>;
  
  constructor() {
    this.authEvents = new Subject<AuthEvent>();
  }
  
  ngOnInit() {
  }

  login(): void {
    Trello.authorize({
      type: 'popup',
      name: 'Trello Angular App',
      scope: {
        read: 'true',
        write: 'true'
      },
      expiration: 'never',
      success: () => {
        localStorage.setItem('jwt',"12345678");
        this.authEvents.next(new DidLogin());
      },
      error: () => {
        localStorage.setItem('jwt',null);
      },
    });
  }
 
  logout(): void {
    Trello.deauthorize();
    localStorage.removeItem('jwt');
    this.authEvents.next(new DidLogout());
  }

  isSignedIn(): boolean {
    return localStorage.getItem('jwt') !== null;
  }

  getMyToken() {
    var token = Trello.token();
    alert(token);
  }

  get events(): Observable<AuthEvent> {
    return this.authEvents;
  }

}

export class DidLogin {
}
export class DidLogout {
}

export type AuthEvent = DidLogin | DidLogout;