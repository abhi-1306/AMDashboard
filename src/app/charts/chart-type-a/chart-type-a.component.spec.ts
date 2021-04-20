import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChartTypeAComponent } from './chart-type-a.component';

describe('ChartTypeAComponent', () => {
  let component: ChartTypeAComponent;
  let fixture: ComponentFixture<ChartTypeAComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChartTypeAComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChartTypeAComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
