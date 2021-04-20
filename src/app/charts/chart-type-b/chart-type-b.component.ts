import { Component, OnInit } from '@angular/core';
import { ChartOptions, ChartType } from 'chart.js';
import { Label, SingleDataSet } from 'ng2-charts';

@Component({
  selector: 'app-chart-type-b',
  templateUrl: './chart-type-b.component.html',
  styleUrls: ['./chart-type-b.component.css']
})
export class ChartTypeBComponent implements OnInit {

  public pieChartOptions: ChartOptions = {
    responsive: true,
  };
  public pieChartLabels: Label[] = ['DEV', 'QA', 'PROD'];
  public pieChartData: SingleDataSet = [32, 9, 3];
  public pieChartType: ChartType = 'pie';
  public pieChartLegend = true;
  public pieChartPlugins = [];

  constructor() { }

  ngOnInit() {
  }

}
