import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CountriesAsiaComponent } from './countries-asia.component';

describe('CountriesAsiaComponent', () => {
  let component: CountriesAsiaComponent;
  let fixture: ComponentFixture<CountriesAsiaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CountriesAsiaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CountriesAsiaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
