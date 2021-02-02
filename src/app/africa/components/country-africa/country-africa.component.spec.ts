import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CountryAfricaComponent } from './country-africa.component';

describe('CountryAfricaComponent', () => {
  let component: CountryAfricaComponent;
  let fixture: ComponentFixture<CountryAfricaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CountryAfricaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CountryAfricaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
