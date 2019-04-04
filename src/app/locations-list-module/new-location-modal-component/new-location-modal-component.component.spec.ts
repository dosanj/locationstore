import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewLocationModalComponentComponent } from './new-location-modal-component.component';

describe('NewLocationModalComponentComponent', () => {
  let component: NewLocationModalComponentComponent;
  let fixture: ComponentFixture<NewLocationModalComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewLocationModalComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewLocationModalComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
