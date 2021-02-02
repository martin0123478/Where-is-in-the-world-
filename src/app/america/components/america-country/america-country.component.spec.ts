import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AmericaCountryComponent } from './america-country.component';
describe('AmericaCountryComponent', () => {
  let component: AmericaCountryComponent;
  let fixture: ComponentFixture<AmericaCountryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AmericaCountryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AmericaCountryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
