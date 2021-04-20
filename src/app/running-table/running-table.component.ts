import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTable } from '@angular/material/table';
import { RunningTableDataSource, RunningTableItem } from './running-table-datasource';
// For info via active datasource
// import { OrderService } from '../orders.service';
// import { Order } from '../order';

@Component({
  selector: 'app-running-table',
  templateUrl: './running-table.component.html',
  styleUrls: ['./running-table.component.css']
})
export class RunningTableComponent implements AfterViewInit, OnInit {
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatTable) table: MatTable<RunningTableItem>;
  dataSource: RunningTableDataSource;
  // For info via active datasource
  // dataLength: number;

  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = ['id', 'name', 'type'];
  // For info via active datasource
//  displayedColumns = [
//    "id",
//    "date",
//    "name",
//    "status",
//    "orderTotal",
//    "paymentMode",
//  ];
// constructor(private orderService: OrderService){}
  ngOnInit() {
    this.dataSource = new RunningTableDataSource();

    // this.datasource = new OrdersTableDataSource(this.orderService);
    // this.orderService.getOrderCount().subscribe({
    //   next: orderCount => {
    //    this.dataLength = orderCount;
    //     },
    // });
  }

  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
    this.table.dataSource = this.dataSource;
  }
}
