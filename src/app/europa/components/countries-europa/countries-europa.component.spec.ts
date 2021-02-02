import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CountriesEuropaComponent } from './countries-europa.component';

describe('CountriesEuropaComponent', () => {
  let component: CountriesEuropaComponent;
  let fixture: ComponentFixture<CountriesEuropaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CountriesEuropaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CountriesEuropaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
