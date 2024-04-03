import { ToastrService } from 'ngx-toastr';
import { UsersService } from './shared/user.service';
import { Component, OnInit } from '@angular/core';
import { User } from './shared/user.model';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrl: './users-list.component.css'
})
export class UsersListComponent implements OnInit {
  
  public listUsers:Array<User>=[];

  constructor(private usersService:UsersService, private toastrService:ToastrService){

  }
  ngOnInit(): void {
    this.usersService.listAll().subscribe(
      res=>{this.listUsers=res}
    )
  }


  public deleteUser(userId:any){
    if(!window.confirm(`Do you want to delete the user id: ${userId} ?`)){
      return
    }
    this.usersService.delete(userId).subscribe(
      res=>{
        this.toastrService.success(`User id ${userId} was deleted`)
        this.listUsers=this.listUsers.filter(e=>e.id !=userId);
      },
      err=>{
        this.toastrService.error(`Error to delete the user id ${userId}`)
      }
    )
  }

  updateList($event:User){
    this.listUsers.push($event)
  }
}
