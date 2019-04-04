import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
export interface DialogData {
  location: string;
}
@Component({
  selector: 'app-new-location-modal-component',
  templateUrl: './new-location-modal-component.component.html',
  styleUrls: ['./new-location-modal-component.component.scss']
})
export class NewLocationModalComponentComponent implements OnInit {
  constructor(
    public dialogRef: MatDialogRef<NewLocationModalComponentComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData
  ) {}

  onNoClick(): void {
    this.dialogRef.close();
  }

  ngOnInit() {}
}
