import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QRheaderComponent } from './qrheader.component';

describe('QRheaderComponent', () => {
  let component: QRheaderComponent;
  let fixture: ComponentFixture<QRheaderComponent>;

  beforeEach(async(() => {
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
