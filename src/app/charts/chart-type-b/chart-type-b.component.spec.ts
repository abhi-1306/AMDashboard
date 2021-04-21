import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { ChartTypeBComponent } from './chart-type-b.component';

describe('ChartTypeBComponent', () => {
  let component: ChartTypeBComponent;
  let fixture: ComponentFixture<ChartTypeBComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ChartTypeBComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChartTypeBComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
