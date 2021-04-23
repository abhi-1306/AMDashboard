import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ChartsModule } from 'ng2-charts';
import { NavComponent } from './nav/nav.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { DashComponent } from './dash/dash.component';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { MatMenuModule } from '@angular/material/menu';
import { CardComponent } from './card/card.component';
import { ChartTypeAComponent } from './charts/chart-type-a/chart-type-a.component';
import { ChartTypeBComponent } from './charts/chart-type-b/chart-type-b.component';
import { ChartTypeCComponent } from './charts/chart-type-c/chart-type-c.component';
import { ChartTypeDComponent } from './charts/chart-type-d/chart-type-d.component';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import {MatBadgeModule} from '@angular/material/badge';
import { RunningTableComponent } from './running-table/running-table.component';
import { NgxChessBoardModule } from "ngx-chess-board";
// import { OrdersTableComponent } from './orders-table/orders-table.component';
import { HomeComponent } from './home/home.component';
import { MatChipsModule } from '@angular/material/chips';
import { MiniCardComponent } from './mini-card/mini-card.component';

import { HttpClientModule,HTTP_INTERCEPTORS} from '@angular/common/http';
import { CacheInterceptor } from './interceptor/cache-interceptor';

import { NewsApiService } from './services/news-api.service';
import { RestutilService } from './services/restutil.service';
import { StorageutilService } from './services/storageutil.service';
import { NewsComponent } from './news/news.component';
import { QRheaderComponent } from './QR/qrheader/qrheader.component';
import { QRprofileComponent } from './QR/qrprofile/qrprofile.component';
import { QRhomeComponent } from './QR/qrhome/qrhome.component';
import { CreateQrComponent } from './QR/create-qr/create-qr.component';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatInputModule } from '@angular/material/input';
import { QrhistoryComponent } from './QR/qrhistory/qrhistory.component';
import { ChessComponent } from './chess/chess.component';

// import { QRCode } from './entity/qr-objects';
// import { StorageutilService } from './services/storageutil.service';
// import { MatchingGameComponent } from './matching-game/matching-game.component';
// import { Game1Component } from './game1/game1.component';
// import { Game2Component } from './game2/game2.component';


@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    DashComponent,
    CardComponent,
    ChartTypeAComponent,
    ChartTypeBComponent,
    ChartTypeCComponent,
    ChartTypeDComponent,
    RunningTableComponent,
    // OrdersTableComponent,
    HomeComponent,
    MiniCardComponent,
    NewsComponent,
    QRheaderComponent,
    QRprofileComponent,
    QRhomeComponent,
    CreateQrComponent,
    QrhistoryComponent,
    ChessComponent,
  
    // QRCode,
    // StorageutilService,
    // MatchingGameComponent,
    // Game1Component,
    // Game2Component,

  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    ChartsModule,
    BrowserAnimationsModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatGridListModule,
    MatCardModule,
    MatMenuModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatChipsModule,
    MatBadgeModule,
    HttpClientModule,
    MatSnackBarModule,
    MatProgressSpinnerModule,
    MatTooltipModule,
    MatInputModule,
    NgxChessBoardModule.forRoot(),
    // StorageutilService,
    // QRCode,
  ],
  providers: [NewsApiService,RestutilService,StorageutilService,
    { provide: HTTP_INTERCEPTORS, useClass: CacheInterceptor, multi: true }],
  bootstrap: [AppComponent]
})
export class AppModule { }
