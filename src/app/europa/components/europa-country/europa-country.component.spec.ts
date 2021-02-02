import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EuropaCountryComponent } from './europa-country.component';
describe('EuropaCountryComponent', () => {
  let component: EuropaCountryComponent;
  let fixture: ComponentFixture<EuropaCountryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EuropaCountryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EuropaCountryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
