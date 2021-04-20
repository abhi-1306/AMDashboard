import { Component, OnInit } from '@angular/core';
import { ChartDataSets, ChartOptions, ChartType } from 'chart.js';
import { Label } from 'ng2-charts';

@Component({
  selector: 'app-chart-type-a',
  templateUrl: './chart-type-a.component.html',
  styleUrls: ['./chart-type-a.component.css']
})
export class ChartTypeAComponent implements OnInit {

  public radarChartOptions: ChartOptions = {
    responsive: true,
  };
  public radarChartLabels: Label[] = ['UI Usage','MQ Usage', 'Linux Usage','Jenkins Usage'];

  public radarChartData: ChartDataSets[] = [
    { data: [65, 59, 50,59], label: 'ENV A' },
    { data: [60, 48, 57,81], label: 'ENV B' }
  ];
  public radarChartType: ChartType = 'radar';

  constructor() { }

  ngOnInit() {
  }

}
