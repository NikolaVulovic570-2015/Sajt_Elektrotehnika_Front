import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { SoftverskoComponent } from './softversko/softversko.component';
import { InformatikaComponent } from './informatika/informatika.component';
import { ElektroRacComponent } from './elektro-rac/elektro-rac.component';
import { BioinzenjeringComponent } from './bioinzenjering/bioinzenjering.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SoftverskoComponent,
    InformatikaComponent,
    ElektroRacComponent,
    BioinzenjeringComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
