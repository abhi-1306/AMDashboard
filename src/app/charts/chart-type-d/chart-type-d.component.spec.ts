import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChartTypeDComponent } from './chart-type-d.component';

describe('ChartTypeDComponent', () => {
  let component: ChartTypeDComponent;
  let fixture: ComponentFixture<ChartTypeDComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChartTypeDComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChartTypeDComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
