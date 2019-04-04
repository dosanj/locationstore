import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { NewLocationModalComponentComponent } from '../new-location-modal-component/new-location-modal-component.component';

@Component({
  selector: 'app-new-location-button-component',
  templateUrl: './new-location-button-component.component.html',
  styleUrls: ['./new-location-button-component.component.scss']
})
export class NewLocationButtonComponentComponent implements OnInit {
  location: any;
  constructor(public dialog: MatDialog) {}

  ngOnInit() {}
  openNewLocationModule() {
    const dialogRef = this.dialog.open(NewLocationModalComponentComponent, {
      width: '250px',
      data: { location: this.location }
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed', result);
    });
  }
}
