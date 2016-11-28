import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {LoginService} from '../../services/login.service';

@Component({
  selector: 'app-user-info',
  templateUrl: './user-info.component.html',
  styleUrls: ['./user-info.component.css']
})
export class UserInfoComponent implements OnInit {
  
  isLogged: boolean;
  url: String;
  name: String;
  userName: String;

  constructor(private router: Router, private loginService: LoginService) { }

  ngOnInit() {
    this.url = "https://trello-avatars.s3.amazonaws.com/08e2cee292565090870a5e2975fa017c/170.png";
    this.isLogged = this.loginService.isSignedIn();
    if(this.isLogged === false) {
      this.router.navigate(['/']);
    }
     this.loginService.events.subscribe(() => {
      this.isLogged = this.loginService.isSignedIn();
    });
  }

}
