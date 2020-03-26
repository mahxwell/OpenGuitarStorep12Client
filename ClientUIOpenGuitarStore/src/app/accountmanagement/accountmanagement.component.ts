import {Component, OnInit} from '@angular/core';
import {AuthenticationService} from '../services/authentication.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-accountmanagement',
  templateUrl: './accountmanagement.component.html',
  styleUrls: ['./accountmanagement.component.css']
})
export class AccountmanagementComponent implements OnInit {

  constructor(private authenticationService: AuthenticationService,
              private route: ActivatedRoute) {
  }

  ngOnInit(): void {
  }

  deleteUserAccount() {
    this.authenticationService.deleteUser();
  }
}
