import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AsiaDetailComponent } from './asia-detail.component';

describe('AsiaDetailComponent', () => {
  let component: AsiaDetailComponent;
  let fixture: ComponentFixture<AsiaDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AsiaDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AsiaDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
