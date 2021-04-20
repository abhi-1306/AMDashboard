import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChartTypeBComponent } from './chart-type-b.component';

describe('ChartTypeBComponent', () => {
  let component: ChartTypeBComponent;
  let fixture: ComponentFixture<ChartTypeBComponent>;

  beforeEach(async(() => {
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
