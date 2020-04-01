import {Component, OnInit} from '@angular/core';
import {Reservation} from '../../models/Reservation.model';
import {Subject} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {ReservationService} from '../../services/reservation.service';

@Component({
  selector: 'app-listreservation',
  templateUrl: './listreservation.component.html',
  styleUrls: ['./listreservation.component.css']
})
export class ListreservationComponent implements OnInit {

  reservations: Reservation[];
  private reservationUrl = 'http://localhost:9008/';
  reservationSubject = new Subject<any[]>();

  constructor(private reservationService: ReservationService,
              private http: HttpClient) {
    const userid = Number(sessionStorage.getItem('id'));
    this.http.get<Reservation[]>(this.reservationUrl + '/reservations/' + String(userid))
      .subscribe(
        (response) => {
          this.reservations = response;
          this.emitReservation();
        },
        (error) => {
          console.log('Erreur ! : ' + error);
        }
      );
  }

  ngOnInit(): void {
  }

  emitReservation() {
    this.reservationSubject.next(this.reservations.slice());
  }
  deleteReservationById(reservationid: number) {
    this.reservationService.deleteReservation(reservationid);
  }

}
