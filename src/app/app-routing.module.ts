import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashComponent } from './dash/dash.component';
import { HomeComponent } from './home/home.component';
import { NewsComponent } from './news/news.component';
import { QRhomeComponent } from './QR/qrhome/qrhome.component';
import { CreateQrComponent } from './QR/create-qr/create-qr.component';
import { QrhistoryComponent } from './QR/qrhistory/qrhistory.component';
//  import { Game1Component } from './game1/game1.component';

const routes: Routes = [{ path: 'Activity', component: DashComponent },{ path: 'Home', component: HomeComponent },
{ path: 'News', component: NewsComponent}, {path: 'Quick Response Code', component: QRhomeComponent },
{path: 'create', component: CreateQrComponent },{path: 'history', component: QrhistoryComponent }];//, { path: 'Game', component: Game1Component }

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
