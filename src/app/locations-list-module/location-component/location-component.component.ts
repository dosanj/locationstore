import { Component, OnInit, Input } from '@angular/core';
import { LocationItem } from '../location.state';

@Component({
  selector: 'app-location-component',
  templateUrl: './location-component.component.html',
  styleUrls: ['./location-component.component.scss']
})
export class LocationComponentComponent implements OnInit {
  @Input() location: LocationItem;
  constructor() {}

  ngOnInit() {}
}
