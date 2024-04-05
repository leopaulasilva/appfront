import { UsersService } from './../../users/users-list/shared/user.service';
import { ToastrService } from 'ngx-toastr';
import { CarsService } from './../cars-list/shared/car.service';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Car } from '../cars-list/shared/car.model';
import { User } from '../../users/users-list/shared/user.model';

@Component({
  selector: 'app-cars-new',
  templateUrl: './cars-new.component.html',
  styleUrl: './cars-new.component.css'
})
export class CarsNewComponent implements OnInit{
  public formCar:FormGroup; 

  @Output() newCar:EventEmitter<Car> = new EventEmitter();
  public listUsers:Array<User>=[];
  users!: User[];
  constructor(private fb:FormBuilder, 
              private carsService:CarsService, 
              private toast:ToastrService,
              private usersService:UsersService){
    this.formCar = this.buildFormCar();
  }
 
  
  ngOnInit(): void {
    this.usersService.listAll().subscribe(
      res => {
        this.users = res; // Assign listUsers to users
      }
    );
  }

  public buildFormCar(): FormGroup {
    return this.fb.group({
      model:["",[Validators.required]],
      carYear:["",[Validators.required]],
      color:["",Validators.required],
      licensePlate:["",Validators.required],
      user: ["", [Validators.required]]
    })
  }

  public isUserSelected(): boolean {
    const userControl = this.formCar.get('user');
    return !userControl || !userControl.value;
  }
  

public isFormControlInvalid(controlName:string):boolean{
  return !!(this.formCar.get(controlName)?.invalid && this.formCar.get(controlName)?.touched)
}

public saveNewCar():void{
  const newCar:Car = this.formCar.value as Car;
  
  // Verifica se 'user' está definido e não é null
  if (newCar.user !== undefined && newCar.user !== null && typeof newCar.user === 'string') {
    // Se 'user' é uma string, converte para um objeto com a propriedade 'id'
    newCar.user = { id: Number(newCar.user) };
  }

  console.log('JSON enviado:', newCar);


  this.carsService.saveNew(newCar).subscribe(
    res => {
      
      this.toast.success("New car has been saved!");
      this.formCar.reset;
      this.newCar.emit(res);
    },
    err => {
      
      this.toast.error("Failed to save new car!");
    }
  )
}



}