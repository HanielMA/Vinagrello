import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {LoginService} from '../../services/login.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  
  isLogged: boolean;
  name: String;

  constructor(private router: Router, private loginService: LoginService) {
  }

  ngOnInit(): void {
      this.isLogged = this.loginService.isSignedIn();
     this.loginService.events.subscribe(() => {
      this.isLogged = this.loginService.isSignedIn();
    });
  }

  login(): void{
    this.loginService.login();
    this.router.navigate(['/']);
  }
  
  logout(): void {
    this.loginService.logout();
    this.router.navigate(['/']);
  }

}