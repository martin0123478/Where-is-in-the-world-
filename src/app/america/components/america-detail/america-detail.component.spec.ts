import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AmericaDetailComponent } from './america-detail.component';

describe('AmericaDetailComponent', () => {
  let component: AmericaDetailComponent;
  let fixture: ComponentFixture<AmericaDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AmericaDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AmericaDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
