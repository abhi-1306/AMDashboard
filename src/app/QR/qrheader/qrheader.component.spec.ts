import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { QRheaderComponent } from './qrheader.component';

describe('QRheaderComponent', () => {
  let component: QRheaderComponent;
  let fixture: ComponentFixture<QRheaderComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ QRheaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QRheaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
