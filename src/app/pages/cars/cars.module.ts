import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CarsRoutingModule } from './cars-routing.module';
import { CarsListComponent } from './cars-list/cars-list.component';
import { CarsNewComponent } from './cars-new/cars-new.component';
import { ReactiveFormsModule } from '@angular/forms';
import { CarsEditComponent } from './cars-edit/cars-edit.component';
import { CarsViewComponent } from './cars-view/cars-view.component';

@NgModule({
  declarations: [
    CarsListComponent,
    CarsNewComponent,
    CarsEditComponent,
    CarsViewComponent
  ],
  imports: [
    CommonModule,
    CarsRoutingModule,
    ReactiveFormsModule
  ]
})
export class CarsModule { }
