import { Component, Input ,OnInit } from '@angular/core';

@Component({
  selector: 'app-qrheader',
  templateUrl: './qrheader.component.html',
  styleUrls: ['./qrheader.component.css']
})
export class QRheaderComponent implements OnInit {
  @Input() showBackButton: boolean;
  @Input() currentTitle: string;
  @Input() showHistoryNav: boolean;
  constructor() { }

  ngOnInit(): void {
  }

}
