import * as fromRoot from '../../state/app.state';
import { createFeatureSelector, createSelector } from '@ngrx/store';
import {
  LocationListActions,
  LocationListActionTypes
} from './location-list.action';
import { LocationItem } from '../location.state';
export interface LocationState extends fromRoot.State {
  locationList: Array<LocationItem>;
}

const initialState: LocationState = {
  locationList: []
};
const getLocationListFeatureState = createFeatureSelector<LocationState>(
  'locationList'
);
export const getCurrentLocationList = createSelector(
  getLocationListFeatureState,
  state => state.locationList
);
export function reducer(
  state = initialState,
  action: LocationListActions
): LocationState {
  switch (action.type) {
    case LocationListActionTypes.AddNewLocation:
      return {
        ...state,
        locationList: [...state.locationList, action.payload]
      };
    default: {
      return state;
    }
  }
}
