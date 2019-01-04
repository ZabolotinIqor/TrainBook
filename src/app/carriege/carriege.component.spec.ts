import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CarriegeComponent } from './carriege.component';

describe('CarriegeComponent', () => {
  let component: CarriegeComponent;
  let fixture: ComponentFixture<CarriegeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CarriegeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CarriegeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
