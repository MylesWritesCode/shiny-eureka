import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TopFiveComponent } from './pages/top-five/top-five.component';


const routes: Routes = [
  { path: '', component: TopFiveComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
