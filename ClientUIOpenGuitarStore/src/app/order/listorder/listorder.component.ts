import {Component, OnInit} from '@angular/core';
import {OrderService} from '../../services/order.service';
import {Order} from '../../models/Order.model';
import {Subject} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {Guitarmodel} from '../../models/Guitarmodel.model';

@Component({
  selector: 'app-listorder',
  templateUrl: './listorder.component.html',
  styleUrls: ['./listorder.component.css']
})
export class ListorderComponent implements OnInit {

  orders: Order[];
  private orderUrl = 'http://localhost:9005/';
  orderSubject = new Subject<any[]>();

  constructor(private orderService: OrderService,
              private http: HttpClient) {
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

  emitOrder() {
    this.orderSubject.next(this.orders.slice());
  }

  deleteOrderById(orderId: number, guitarid: number) {
    const guitaridToStr = String(guitarid);
    const newGuitarmodel = new Guitarmodel(
      null,
      guitaridToStr
    );

    this.orderService.deleteOrder(orderId);
    this.orderService.addModel(newGuitarmodel);
  }

}
