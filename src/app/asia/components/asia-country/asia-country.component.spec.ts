import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AsiaCountryComponent } from './asia-country.component';

describe('AsiaCountryComponent', () => {
  let component: AsiaCountryComponent;
  let fixture: ComponentFixture<AsiaCountryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AsiaCountryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AsiaCountryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
