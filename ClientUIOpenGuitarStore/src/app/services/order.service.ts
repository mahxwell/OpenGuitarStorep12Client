import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Guitarmodel} from '../models/Guitarmodel.model';

@Injectable({
  providedIn: 'root'
})
export class OrderService {


  private orderUrl = 'http://localhost:9005/';

  constructor(private http: HttpClient) {
  }

  addOrder(guitarid: number, userid: number) {
    this.http
      .post(this.orderUrl + 'orders/add/' + String(guitarid) + '/' + String(userid), null)
      .subscribe(
        () => {
          console.log('Enregistrement terminé !');
        },
        (error) => {
          console.log('Erreur ! : ' + error);
        }
      );
  }

  modelDelete(guitarid: number) {
    this.http
      .delete(this.orderUrl + 'orders/modeldelete/' + String(guitarid))
      .subscribe(
        () => {
          console.log('Delete terminé !');
        },
        (error) => {
          console.log('Erreur ! : ' + error);
        }
      );
  }

  deleteOrder(orderid: number) {
    this.http
      .delete(this.orderUrl + 'orders/delete/' + String(orderid))
      .subscribe(
        () => {
          console.log('Delete terminé !');
        },
        (error) => {
          console.log('Erreur ! : ' + error);
        }
      );
  }

  addModel(guitarmodel: Guitarmodel) {
    this.http
      .post(this.orderUrl + 'orders/modeladd/', guitarmodel)
      .subscribe(
        () => {
          console.log('Enregistrement terminé !');
        },
        (error) => {
          console.log('Erreur ! : ' + error);
        }
      );
  }
}
