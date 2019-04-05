import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LocationListComponentComponent } from './location-list-component/location-list-component.component';
import { LocationComponentComponent } from './location-component/location-component.component';
import {
  MatListModule,
  MatButtonModule,
  MatIconModule,
  MatDialogModule,
  MatFormFieldModule,
  MatInputModule
} from '@angular/material';
import { NewLocationButtonComponentComponent } from './new-location-button-component/new-location-button-component.component';
import { NewLocationModalComponentComponent } from './new-location-modal-component/new-location-modal-component.component';
import { FormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';
import { reducer } from './state/location-list.state';

@NgModule({
  declarations: [
    LocationListComponentComponent,
    LocationComponentComponent,
    NewLocationButtonComponentComponent,
    NewLocationModalComponentComponent
  ],
  exports: [LocationListComponentComponent],
  imports: [
    CommonModule,
    StoreModule.forFeature('locationList', reducer),
    MatListModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    MatDialogModule,
    MatFormFieldModule,
    FormsModule
  ],
  entryComponents: [NewLocationModalComponentComponent]
})
export class LocationsListModuleModule {}
