import { ActivatedRoute } from '@angular/router';
import { UsersService } from './../users-list/shared/user.service';
import { Component, OnInit } from '@angular/core';
import { User } from '../users-list/shared/user.model';

@Component({
  selector: 'app-users-view',
  templateUrl: './users-view.component.html',
  styleUrl: './users-view.component.css'
})
export class UsersViewComponent implements OnInit{
  
  public user:User | any = null;
  constructor(private usersService:UsersService, private activatedRoute:ActivatedRoute){

  }
  
  ngOnInit(): void {
    const userId:number=Number(this.activatedRoute.snapshot.paramMap.get('id'))
    this.usersService.listById(userId).subscribe(
      res=>this.user=res
    )
    
  }


}
