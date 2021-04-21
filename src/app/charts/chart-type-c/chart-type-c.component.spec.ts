import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { ChartTypeCComponent } from './chart-type-c.component';

describe('ChartTypeCComponent', () => {
  let component: ChartTypeCComponent;
  let fixture: ComponentFixture<ChartTypeCComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ChartTypeCComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChartTypeCComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
