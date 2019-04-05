import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { NewLocationModalComponentComponent } from '../new-location-modal-component/new-location-modal-component.component';
import { Store } from '@ngrx/store';
import { AddNewLocation } from '../state/location-list.action';
import { LocationItem } from '../location.state';

@Component({
  selector: 'app-new-location-button-component',
  templateUrl: './new-location-button-component.component.html',
  styleUrls: ['./new-location-button-component.component.scss']
})
export class NewLocationButtonComponentComponent implements OnInit {
  location: any;
  constructor(public dialog: MatDialog, private store: Store<any>) {}

  ngOnInit() {}
  openNewLocationModule() {
    const dialogRef = this.dialog.open(NewLocationModalComponentComponent, {
      width: '250px',
      data: { location: this.location }
    });
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        const newLocation: LocationItem = { placeMarker: result };
        this.store.dispatch(new AddNewLocation(newLocation));
      }
    });
  }
}
