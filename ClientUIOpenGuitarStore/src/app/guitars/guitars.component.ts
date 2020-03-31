import {Component, OnInit} from '@angular/core';
import {Guitar} from '../models/Guitar.model';
import {Subscription} from 'rxjs';
import {GuitarsService} from '../services/guitars.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-guitars',
  templateUrl: './guitars.component.html',
  styleUrls: ['./guitars.component.css']
})
export class GuitarsComponent implements OnInit {

  guitars: Guitar[] = [];
  guitarSubscription: Subscription;

  constructor(private guitarService: GuitarsService,
              private router: Router) {
    this.guitarSubscription = this.guitarService.guitarSubject.subscribe(
      (guitars: Guitar[]) => {
        this.guitars = guitars;
      }
    );
    this.guitarService.emitGuitar();
  }

  ngOnInit(): void {
    this.guitarService.getGuitars();
  }

  onViewGuitar(id: number) {
    this.router.navigate(['guitars/', id]);
  }
}
