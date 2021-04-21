import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { QrhistoryComponent } from './qrhistory.component';

describe('QrhistoryComponent', () => {
  let component: QrhistoryComponent;
  let fixture: ComponentFixture<QrhistoryComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ QrhistoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QrhistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
