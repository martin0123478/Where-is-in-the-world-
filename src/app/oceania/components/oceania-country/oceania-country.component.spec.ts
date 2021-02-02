import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OceaniaCountryComponent } from './oceania-country.component';

describe('OceaniaCountryComponent', () => {
  let component: OceaniaCountryComponent;
  let fixture: ComponentFixture<OceaniaCountryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OceaniaCountryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OceaniaCountryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
