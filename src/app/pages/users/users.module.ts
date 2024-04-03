import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsersRoutingModule } from './users-routing.module';
import { UsersListComponent } from './users-list/users-list.component';
import { UsersNewComponent } from './users-new/users-new.component';
import { ReactiveFormsModule } from '@angular/forms';
import { UsersEditComponent } from './users-edit/users-edit.component';
import { UsersViewComponent } from './users-view/users-view.component';

@NgModule({
  declarations: [
    UsersListComponent,
    UsersNewComponent,
    UsersEditComponent,
    UsersViewComponent
  ],
  imports: [
    CommonModule,
    UsersRoutingModule,
    ReactiveFormsModule
  ]
})
export class UsersModule { }
