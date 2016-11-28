import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { LoginService } from '../../services/login.service';
import { UserInfoService } from '../../services/user-info.service';
import { HttpModule, JsonpModule } from '@angular/http';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { User } from '../../shared/classes/User';


@Component({
  selector: 'app-user-info',
  templateUrl: './user-info.component.html',
  styleUrls: ['./user-info.component.css']
})
export class UserInfoComponent implements OnInit {

  isLogged: boolean;

  user: User = new User();

  constructor(private userInfoService: UserInfoService, private router: Router, private loginService: LoginService) { }

  ngOnInit() {
    this.isLogged = this.loginService.isSignedIn();

    if (this.isLogged === false) {
      this.router.navigate(['/']);
    }

    this.loginService.events.subscribe(() => {
      this.isLogged = this.loginService.isSignedIn();
    });

    this.userInfoService.getUser().subscribe(res => {
      this.user = res;
    });
  }
}
