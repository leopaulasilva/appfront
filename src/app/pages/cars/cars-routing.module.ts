import { CarsViewComponent } from './cars-view/cars-view.component';
import { CarsListComponent } from './cars-list/cars-list.component';
import { CarsNewComponent } from './cars-new/cars-new.component';
import { CarsEditComponent } from './cars-edit/cars-edit.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path:'',component:CarsListComponent},
  {path:'new',component:CarsNewComponent},
  {path:'edit/:id',component:CarsEditComponent},
  {path:'view/:id',component:CarsViewComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CarsRoutingModule { }
