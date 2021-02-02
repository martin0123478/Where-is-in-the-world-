import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CountriesOceaniaComponent } from './countries-oceania.component';

describe('CountriesOceaniaComponent', () => {
  let component: CountriesOceaniaComponent;
  let fixture: ComponentFixture<CountriesOceaniaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CountriesOceaniaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CountriesOceaniaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
