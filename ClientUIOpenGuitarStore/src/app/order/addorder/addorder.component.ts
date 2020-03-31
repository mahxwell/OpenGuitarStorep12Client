import {Component, OnInit} from '@angular/core';
import {OrderService} from '../../services/order.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-addorder',
  templateUrl: './addorder.component.html',
  styleUrls: ['./addorder.component.css']
})
export class AddorderComponent implements OnInit {
  guitarid: number;
  userid: number;


  constructor(private orderService: OrderService,
              private router: Router) {
    this.guitarid = Number(sessionStorage.getItem('guitarid'));
    this.userid = Number(sessionStorage.getItem('id'));
  }


  ngOnInit(): void {
    this.addNewOrder();
  }

  addNewOrder() {
    this.orderService.addOrder(this.guitarid, this.userid);
  }

  deleteModel() {
    this.orderService.modelDelete(this.guitarid);
    this.router.navigate(['welcome']);
  }
}
