import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LocationListComponentComponent } from './location-list-component.component';

describe('LocationListComponentComponent', () => {
  let component: LocationListComponentComponent;
  let fixture: ComponentFixture<LocationListComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LocationListComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LocationListComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
