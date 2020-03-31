import {Component, OnInit} from '@angular/core';
import {Guitar} from '../../models/Guitar.model';
import {Subscription} from 'rxjs';
import {GuitarsService} from '../../services/guitars.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

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
  }

  onViewGuitar(id: number) {
    this.router.navigate(['guitars/', id]);
  }
}
