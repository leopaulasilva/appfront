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

  constructor(private usersService:UsersService){

  }
  ngOnInit(): void {
    this.usersService.listAll().subscribe(
      res=>{this.listUsers=res}
    )
  }


  public deleteUser(userId:any){
    console.log("remover user", userId)
  }
}
