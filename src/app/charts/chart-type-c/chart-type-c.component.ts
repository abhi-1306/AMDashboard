import { Component, OnInit } from '@angular/core';
import { ChartDataSets, ChartOptions, ChartType } from 'chart.js';
import { Color, Label } from 'ng2-charts';
// import { DataService } from 'src/app/data/data.service';
@Component({
  selector: 'app-chart-type-c',
  templateUrl: './chart-type-c.component.html',
  styleUrls: ['./chart-type-c.component.css']
})
export class ChartTypeCComponent implements OnInit {

  public lineChartData: ChartDataSets[] = [
    { data: [65, 59, 80, 81, 56, 55, 40], label: 'Series A' },
  ];
  public lineChartLabels: Label[] = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];
  public lineChartOptions: ChartOptions = {
    responsive: true,
  };
  public lineChartColors: Color[] = [
    {
      borderColor: 'black',
      backgroundColor: 'rgba(255,0,0,0.3)',
    },
  ];
  public lineChartLegend = true;
  public lineChartType: ChartType = 'line';
  public lineChartPlugins = [];

  constructor() { }

  ngOnInit() {
  }

  // For data through services that provide req data
  // constructor(private dataService: DataService) { }

  // ngOnInit() {
  
  //   this.dataService.getDataByRun().subscribe({
  //     next: salesItems => {
  //       salesItems.forEach(li => {
  //         this.dataService[0].data.push(li.perfCount);
  //         this.dataService.push(li.execution_n0);
  //       });
  //     },
  //   });
  // }

}
