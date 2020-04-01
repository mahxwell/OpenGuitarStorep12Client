import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {ReservationService} from '../../services/reservation.service';

@Component({
  selector: 'app-addreservation',
  templateUrl: './addreservation.component.html',
  styleUrls: ['./addreservation.component.css']
})
export class AddreservationComponent implements OnInit {

  guitarid: number;
  userid: number;

  constructor(private router: Router,
              private reservationService: ReservationService) {
    this.guitarid = Number(sessionStorage.getItem('guitarid'));
    this.userid = Number(sessionStorage.getItem('id'));
  }

  ngOnInit(): void {
    this.addNewReservation();
  }


  addNewReservation() {
    this.reservationService.addReservation(this.guitarid, this.userid);
    this.router.navigate(['welcome']);
  }
}
