import {Component, OnInit} from '@angular/core';
import {AuthenticationService} from '../services/authentication.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  session = null;
  userpseudo: string;
  isUserLoggedIn: boolean;

  constructor(private authenticationService: AuthenticationService) {

    this.authenticationService.isUserLoggedIn.subscribe(value => {
      this.isUserLoggedIn = value;
    });
    this.authenticationService.userPseudo.subscribe(value => {
      this.userpseudo = value;
    });
  }

  ngOnInit(): void {
    this.session = sessionStorage.getItem('id');
    this.userpseudo = sessionStorage.getItem('pseudo');
    if (this.session == null) {
      this.isUserLoggedIn = false;

    } else {
      this.isUserLoggedIn = true;
    }
  }

  logOutUser() {
    this.authenticationService.logOut();
  }

}
