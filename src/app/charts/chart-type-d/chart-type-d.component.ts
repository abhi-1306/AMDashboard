import { Component, OnInit } from '@angular/core';
import { ChartDataSets, ChartOptions, ChartType } from 'chart.js';
import { Label } from 'ng2-charts';

@Component({
  selector: 'app-chart-type-d',
  templateUrl: './chart-type-d.component.html',
  styleUrls: ['./chart-type-d.component.css']
})
export class ChartTypeDComponent implements OnInit {

  public barChartOptions: ChartOptions = {
    responsive: true,
  };
  public barChartLabels: Label[] = ['DEV', 'QA', 'PROD'];
  public barChartType: ChartType = 'bar';
  public barChartLegend = true;
  public barChartPlugins = [];

  public barChartData: ChartDataSets[] = [
    { data: [206.6, 163.4, 93.1], label: 'TASKS' },
    { data: [109.8, 137.6, 97.7], label: 'DEFECTS' },
    { data: [129.0, 131.2, 94.1], label: 'COMMITS' }
  ];

  constructor() { }

  ngOnInit() {
  }

}
