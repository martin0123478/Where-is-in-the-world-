import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CountriesAfricaComponent } from './countries-africa.component';

describe('CountriesAfricaComponent', () => {
  let component: CountriesAfricaComponent;
  let fixture: ComponentFixture<CountriesAfricaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CountriesAfricaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CountriesAfricaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
