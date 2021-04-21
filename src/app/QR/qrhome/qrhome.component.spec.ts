import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { QRhomeComponent } from './qrhome.component';

describe('QRhomeComponent', () => {
  let component: QRhomeComponent;
  let fixture: ComponentFixture<QRhomeComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ QRhomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QRhomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
