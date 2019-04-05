import { Action } from '@ngrx/store';
import { LocationItem } from '../location.state';

export enum LocationListActionTypes {
  AddNewLocation = '[LocationList] Add New Location'
}
export class AddNewLocation implements Action {
  readonly type = LocationListActionTypes.AddNewLocation;
  constructor(public payload: LocationItem) {}
}
export type LocationListActions = AddNewLocation;
