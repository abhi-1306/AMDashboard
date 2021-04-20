import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QRprofileComponent } from './qrprofile.component';

describe('QRprofileComponent', () => {
  let component: QRprofileComponent;
  let fixture: ComponentFixture<QRprofileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QRprofileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QRprofileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
