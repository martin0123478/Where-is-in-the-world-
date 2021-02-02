import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CountriesAmericaComponent } from './countries-america.component';

describe('CountriesAmericaComponent', () => {
  let component: CountriesAmericaComponent;
  let fixture: ComponentFixture<CountriesAmericaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CountriesAmericaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CountriesAmericaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
