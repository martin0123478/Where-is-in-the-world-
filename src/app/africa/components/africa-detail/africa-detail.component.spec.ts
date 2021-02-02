import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AfricaDetailComponent } from './africa-detail.component';

describe('AfricaDetailComponent', () => {
  let component: AfricaDetailComponent;
  let fixture: ComponentFixture<AfricaDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AfricaDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AfricaDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
