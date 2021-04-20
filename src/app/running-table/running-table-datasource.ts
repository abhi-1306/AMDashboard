import { DataSource } from '@angular/cdk/collections';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { merge, Observable, of as observableOf } from 'rxjs';
import { map } from 'rxjs/operators';

// TODO: Replace this with your own data model type
export interface RunningTableItem {
  name: string;
  id: number;
  type:string;
}

// TODO: replace this with real data from your application
const EXAMPLE_DATA: RunningTableItem[] = [
  {id: 1, name: 'Util1',type: 'DEV'},
  {id: 2, name: 'Util2',type: 'DEV'},
  {id: 3, name: 'Uti3',type: 'DEV'},
  {id: 4, name: 'Util4',type: 'DEV'},
  {id: 5, name: 'Util5',type: 'DEV'},
  {id: 6, name: 'Util6',type: 'DEV'},
  {id: 7, name: 'Util7',type: 'DEV'},
  {id: 8, name: 'Util8',type: 'QA'},
  {id: 9, name: 'Util9',type: 'PROD'},
  {id: 10, name: 'Util10',type: 'PROD'},
  {id: 11, name: 'Util11',type: 'PROD'},
  {id: 12, name: 'Util12',type: 'PROD'},
  {id: 13, name: 'Util13',type: 'PROD'},
  {id: 14, name: 'Util14',type: 'PROD'},
  {id: 15, name: 'Util15',type: 'PROD'},
  {id: 16, name: 'Util16',type: 'PROD'},
  {id: 17, name: 'Util17',type: 'QA'},
  {id: 18, name: 'Util18',type: 'QA'},
  {id: 19, name: 'Util19',type: 'QA'},
  {id: 20, name: 'Util20',type: 'QA'},
  {id: 21, name: 'Util21',type: 'QA'},
  {id: 22, name: 'Util22',type: 'QA'},
  {id: 23, name: 'Util23',type: 'QA'},
  {id: 24, name: 'Util24',type: 'QA'},
  {id: 25, name: 'Util25',type: 'QA'},
];

/**
 * Data source for the RunningTable view. This class should
 * encapsulate all logic for fetching and manipulating the displayed data
 * (including sorting, pagination, and filtering).
 */
export class RunningTableDataSource extends DataSource<RunningTableItem> {
  data: RunningTableItem[] = EXAMPLE_DATA;
  paginator: MatPaginator;
  sort: MatSort;

  constructor() {
    super();
  }

  /**
   * Connect this data source to the table. The table will only update when
   * the returned stream emits new items.
   * @returns A stream of the items to be rendered.
   */
  connect(): Observable<RunningTableItem[]> {
    // Combine everything that affects the rendered data into one update
    // stream for the data-table to consume.
    const dataMutations = [
      observableOf('Initial load'),
      this.paginator.page,
      this.sort.sortChange
    ];

    return merge(...dataMutations).pipe(map(() => {//   mergeMap(() => {
    //  return this.orderService.getOrders(
    //    this.paginator.pageIndex * this.paginator.pageSize,
    //    this.paginator.pageSize,
    //    this.sort.active,
    //    this.sort.direction
      return this.getPagedData(this.getSortedData([...this.data]));
    }));
  }

  /**
   *  Called when the table is being destroyed. Use this function, to clean up
   * any open connections or free any held resources that were set up during connect.
   */
  disconnect() {}

  /**
   * Paginate the data (client-side). If you're using server-side pagination,
   * this would be replaced by requesting the appropriate data from the server.
   */
  private getPagedData(data: RunningTableItem[]) {
    const startIndex = this.paginator.pageIndex * this.paginator.pageSize;
    return data.splice(startIndex, this.paginator.pageSize);
  }

  /**
   * Sort the data (client-side). If you're using server-side sorting,
   * this would be replaced by requesting the appropriate data from the server.
   */
  private getSortedData(data: RunningTableItem[]) {
    if (!this.sort.active || this.sort.direction === '') {
      return data;
    }

    return data.sort((a, b) => {
      const isAsc = this.sort.direction === 'asc';
      switch (this.sort.active) {
        case 'name': return compare(a.name, b.name, isAsc);
        case 'id': return compare(+a.id, +b.id, isAsc);
        case 'type': return compare(+a.type, +b.type, isAsc);
        default: return 0;
      }
    });
  }
}

/** Simple sort comparator for example ID/Name columns (for client-side sorting). */
function compare(a: string | number, b: string | number, isAsc: boolean) {
  return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
}
