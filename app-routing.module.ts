import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { SoftverskoComponent } from './softversko/softversko.component';
import { InformatikaComponent } from './informatika/informatika.component';
import { ElektroRacComponent } from './elektro-rac/elektro-rac.component';
import { BioinzenjeringComponent } from './bioinzenjering/bioinzenjering.component';


const routes: Routes = [
  { path: '', component: HomeComponent },  
  { path: 'softversko', component: SoftverskoComponent }, 
  { path: 'informatika', component: InformatikaComponent }, 
  { path: 'elektro-rac', component: ElektroRacComponent }, 
  { path: 'bioinzenjering', component: BioinzenjeringComponent }, 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
