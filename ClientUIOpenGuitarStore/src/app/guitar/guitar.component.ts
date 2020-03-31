import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Params} from '@angular/router';
import {GuitarsService} from '../services/guitars.service';
import {Guitar} from '../models/Guitar.model';
import {switchMap} from 'rxjs/operators';
import {ReviewService} from '../services/review.service';
import {Review} from '../models/Review.model';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-guitar',
  templateUrl: './guitar.component.html',
  styleUrls: ['./guitar.component.css']
})
export class GuitarComponent implements OnInit {

  guitar: Guitar;
  reviews: Review[] = [];
  reviewSubscription: Subscription;
  userConnected: boolean;

  constructor(private guitarService: GuitarsService,
              private route: ActivatedRoute,
              private reviewService: ReviewService) {
    this.reviewSubscription = this.reviewService.reviewSubject.subscribe(
      (reviews: Review[]) => {
        this.reviews = reviews;
      }
    );
    this.reviewService.emitReview();
  }

  ngOnInit(): void {
    const id = 'id';
    this.route.params.pipe(switchMap((params: Params) =>
      this.guitarService.getOneGuitar(+params[id])))
      .subscribe((guitar: Guitar) => {
        this.guitar = guitar;
        this.getReview(this.guitar.guitarid);
      });
    if (sessionStorage.getItem('id') != null) {
      this.userConnected = true;
    } else {
      this.userConnected = false;
    }
    sessionStorage.setItem('guitarid', String(this.guitar.guitarid));
  }

  getReview(guitaridguitar: number) {
    this.reviewService.getReviewsByGuitarId(guitaridguitar);
  }

}
