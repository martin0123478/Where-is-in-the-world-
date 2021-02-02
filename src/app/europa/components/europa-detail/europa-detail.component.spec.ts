import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EuropaDetailComponent } from './europa-detail.component';

describe('EuropaDetailComponent', () => {
  let component: EuropaDetailComponent;
  let fixture: ComponentFixture<EuropaDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EuropaDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EuropaDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
