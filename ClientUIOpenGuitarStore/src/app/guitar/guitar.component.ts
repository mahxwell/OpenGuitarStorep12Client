import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Params} from '@angular/router';
import {GuitarsService} from '../services/guitars.service';
import {Guitar} from '../models/Guitar.model';
import {switchMap} from 'rxjs/operators';
import {Guitarmodel} from '../models/Guitarmodel.model';

@Component({
  selector: 'app-guitar',
  templateUrl: './guitar.component.html',
  styleUrls: ['./guitar.component.css']
})
export class GuitarComponent implements OnInit {

  guitar: Guitar;
  guitarmodel: Guitarmodel;
  constructor( private guitarService: GuitarsService,
               private route: ActivatedRoute) { }

  ngOnInit(): void {
    const id = 'id';
    this.route.params.pipe(switchMap((params: Params) =>
      this.guitarService.getOneGuitar(+params[id])))
      .subscribe((guitar: Guitar) => this.guitar = guitar);
  }

}
