import { ToastrService } from 'ngx-toastr';
import { UsersService } from './../users-list/shared/user.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { User } from '../users-list/shared/user.model';

@Component({
  selector: 'app-users-new',
  templateUrl: './users-new.component.html',
  styleUrl: './users-new.component.css'
})
export class UsersNewComponent implements OnInit{
  public formUser:FormGroup; 

  constructor(private fb:FormBuilder, private usersService:UsersService, private toast:ToastrService){
    this.formUser = this.buildFormUser();
  }
 
  
  ngOnInit(): void {
    
  }

  public buildFormUser(): FormGroup {
    return this.fb.group({
      firstName:["",[Validators.required]],
      lastName:["",[Validators.required]],
      birthday:["",],
      phone:["",],
      login:["",[Validators.required]],
      email:["",[Validators.required, Validators.email]],
      password:["",[Validators.required, Validators.minLength(6)]]
    })
  }

public isFormControlInvalid(controlName:string):boolean{
  return !!(this.formUser.get(controlName)?.invalid && this.formUser.get(controlName)?.touched)
}

public saveNewUser():void{
  const newUser:User = this.formUser.value as User;
  this.formUser.reset;

  this.usersService.saveNew(newUser).subscribe(
    res => {
      
      this.toast.success("New user has been saved!");
    },
    err => {
      
      this.toast.error("Failed to save new user!");
    }
  )
}
}