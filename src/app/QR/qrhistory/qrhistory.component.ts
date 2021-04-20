import { Component, OnInit } from '@angular/core';
import { StorageutilService } from '../../services/storageutil.service';
import {MatSnackBar} from '@angular/material/snack-bar';

@Component({
  selector: 'app-qrhistory',
  templateUrl: './qrhistory.component.html',
  styleUrls: ['./qrhistory.component.css']
})
export class QrhistoryComponent implements OnInit {

  showBackButton = true;
  title = 'History';
  showHistoryNav = false;
  historyList;
 
  constructor(private storageService: StorageutilService,
  private snackbar: MatSnackBar ) { }
 
  ngOnInit() {
    this.populateHistory();
  }
 
  private populateHistory() {
    this.historyList = this.storageService.readAllHistory();
  }
 
  delete(text: string) {
    this.storageService.deleteHistory(text);
    this.populateHistory();
  }
 
  share(text: string) {
    this.snackbar.open(text, '', {duration: 3000,panelClass: ['snackbarColor']})
  }

}
