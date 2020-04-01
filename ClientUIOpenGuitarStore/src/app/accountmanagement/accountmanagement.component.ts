import {Component, OnInit} from '@angular/core';
import {AuthenticationService} from '../services/authentication.service';
import {ActivatedRoute, Router} from '@angular/router';
import {Order} from '../models/Order.model';
import {OrderService} from '../services/order.service';
import {HttpClient} from '@angular/common/http';
import {Subject} from 'rxjs';

@Component({
  selector: 'app-accountmanagement',
  templateUrl: './accountmanagement.component.html',
  styleUrls: ['./accountmanagement.component.css']
})
export class AccountmanagementComponent implements OnInit {
  orders: Order[];
  private orderUrl = 'http://localhost:9005/';
  orderSubject = new Subject<any[]>();

  constructor(private authenticationService: AuthenticationService,
              private orderService: OrderService,
              private http: HttpClient,
              private router: Router) {
    const userid = Number(sessionStorage.getItem('id'));
    this.http.get<Order[]>(this.orderUrl + '/orders/' + String(userid))
      .subscribe(
        (response) => {
          this.orders = response;
          this.emitOrder();
        },
        (error) => {
          console.log('Erreur ! : ' + error);
        }
      );
  }

  ngOnInit(): void {
  }

  deleteUserAccount() {
    this.authenticationService.deleteUser();
    this.router.navigate(['generalmsg']);
  }

  emitOrder() {
    this.orderSubject.next(this.orders.slice());
  }
}
