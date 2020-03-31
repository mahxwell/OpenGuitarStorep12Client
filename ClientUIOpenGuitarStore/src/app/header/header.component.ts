import {Component, OnInit} from '@angular/core';
import {AuthenticationService} from '../services/authentication.service';
import {GuitarsService} from '../services/guitars.service';
import {FormBuilder, FormGroup} from '@angular/forms';
import {Router} from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  session = null;
  userpseudo: string;
  isUserLoggedIn: boolean;
  searchForm: FormGroup;

  constructor(private authenticationService: AuthenticationService,
              private guitarService: GuitarsService,
              private formBuilder: FormBuilder,
              private router: Router) {

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
    this.initForm();
  }


  initForm() {
    this.searchForm = this.formBuilder.group({
      searchbox: ''
    });
  }

  search() {
    const formValue = this.searchForm.value;
    const searchbox = 'searchbox';
    this.guitarService.searchGuitar(formValue[searchbox]);
    this.router.navigate(['search']);
  }

  logOutUser() {
    this.authenticationService.logOut();
  }

}
