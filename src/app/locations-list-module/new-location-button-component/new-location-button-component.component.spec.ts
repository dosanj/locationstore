import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewLocationButtonComponentComponent } from './new-location-button-component.component';

describe('NewLocationButtonComponentComponent', () => {
  let component: NewLocationButtonComponentComponent;
  let fixture: ComponentFixture<NewLocationButtonComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewLocationButtonComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewLocationButtonComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
