import { Component, OnInit ,} from '@angular/core';
import { StorageutilService } from '../../services/storageutil.service';

@Component({
  selector: 'app-qrprofile',
  templateUrl: './qrprofile.component.html',
  styleUrls: ['./qrprofile.component.css']
})
export class QRprofileComponent implements OnInit {

  

  historyCount = 0;
  constructor(private storageUtilService: StorageutilService) { }


   
    ngOnInit() {
      this.updateHistoryCount();
    }
   
    updateHistoryCount() {
      this.historyCount = this.storageUtilService.getHistoryCount();
    }
   }


