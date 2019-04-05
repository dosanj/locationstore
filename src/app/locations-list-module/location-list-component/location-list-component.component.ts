import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import * as fromLocationListAction from '../state/location-list.action';
import { LocationItem } from '../location.state';
import { getCurrentLocationList } from '../state/location-list.state';

@Component({
  selector: 'app-location-list-component',
  templateUrl: './location-list-component.component.html',
  styleUrls: ['./location-list-component.component.scss']
})
export class LocationListComponentComponent implements OnInit {
  locationList$: Observable<Array<LocationItem>>;
  constructor(private store: Store<any>) {}

  ngOnInit() {
    this.locationList$ = this.store.pipe(select(getCurrentLocationList));
  }
}
