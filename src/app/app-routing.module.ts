import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


import { CenterComponent } from './center/center.component';
import { AddcenterComponent } from './addcenter/addcenter.component';
import { DeleteComponent } from './delete/delete.component';

const routes: Routes = [
  { path: 'center', component: CenterComponent },
  {path: 'addcenter', component:AddcenterComponent},
  {path:'delete',component:DeleteComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
