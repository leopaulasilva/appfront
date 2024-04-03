import { UsersListComponent } from './users-list/users-list.component';
import { UsersNewComponent } from './users-new/users-new.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path:'',component:UsersListComponent},
  {path:'',component:UsersNewComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsersRoutingModule { }
