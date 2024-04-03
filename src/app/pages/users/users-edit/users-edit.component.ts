import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { UsersService } from './../users-list/shared/user.service';
import { User } from '../users-list/shared/user.model';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-users-edit',
  templateUrl: './users-edit.component.html',
  styleUrl: './users-edit.component.css'
})
export class UsersEditComponent implements OnInit{
  public formEditUser:FormGroup;
  
  @Output() editUser:EventEmitter<User> = new EventEmitter();

  constructor(private datePipe: DatePipe, 
    private activatedRoute:ActivatedRoute, 
    private fb:FormBuilder, 
    private usersService:UsersService, 
    private toast:ToastrService,
    private router:Router){
    this.formEditUser = this.buildFormEditUser();
    
  }
  ngOnInit(): void {
    const userId = Number(this.activatedRoute.snapshot.paramMap.get('id'))
    console.log('user id: ',userId)
    this.usersService.listById(userId).subscribe(
      res => {
        if (res.birthday !== null) {
          // Format the date before setting it in the form
          res.birthday = this.datePipe.transform(res.birthday, 'yyyy-MM-dd') || undefined;
          // If the transformed value is null, assign undefined instead
        }
        this.formEditUser.patchValue(res)
      },
      err=>{
        this.toast.error("Failed to fetch user!");
      }
    )
  }

  private buildFormEditUser(): FormGroup {
    return this.fb.group({
      id:[null,[Validators.required]],
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
    return !!(this.formEditUser.get(controlName)?.invalid && this.formEditUser.get(controlName)?.touched)
  }

  public updateUser():void{
    const editUser:User = this.formEditUser.value as User;
    
  
    this.usersService.update(editUser).subscribe(
      res => {
        
        this.formEditUser.reset();
        this.toast.success(`User ${editUser.firstName} has been saved!`);
        this.router.navigate(['users']);
        this.editUser.emit(res);
      },
      err => {
        this.toast.error("Failed to edit user!");
      }
    )
  }
}
