import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { CarsService } from './../cars-list/shared/car.service';
import { Car } from '../cars-list/shared/car.model';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-cars-edit',
  templateUrl: './cars-edit.component.html',
  styleUrl: './cars-edit.component.css'
})
export class CarsEditComponent implements OnInit{
  public formEditCar:FormGroup;
  
  @Output() editCar:EventEmitter<Car> = new EventEmitter();

  constructor(private datePipe: DatePipe, 
    private activatedRoute:ActivatedRoute, 
    private fb:FormBuilder, 
    private carsService:CarsService, 
    private toast:ToastrService,
    private router:Router){
    this.formEditCar = this.buildFormEditCar();
    
  }
  ngOnInit(): void {
    const carId = Number(this.activatedRoute.snapshot.paramMap.get('id'))
    console.log('car id: ',carId)
    this.carsService.listById(carId).subscribe(
      res => {
        this.formEditCar.patchValue(res)
      },
      err=>{
        this.toast.error("Failed to fetch car!");
      }
    )
  }

  private buildFormEditCar(): FormGroup {
    return this.fb.group({
      model:["",[Validators.required]],
      carYear:["",[Validators.required]],
      color:["",Validators.required],
      licensePlate:["",Validators.required],
      userId:["",[Validators.required]]
    })
  }
  
  public isFormControlInvalid(controlName:string):boolean{
    return !!(this.formEditCar.get(controlName)?.invalid && this.formEditCar.get(controlName)?.touched)
  }

  public updateCar():void{
    const editCar:Car = this.formEditCar.value as Car;
    
  
    this.carsService.update(editCar).subscribe(
      res => {
        
        this.formEditCar.reset();
        this.toast.success(`Car ${editCar.licensePlate} has been saved!`);
        this.router.navigate(['cars']);
        this.editCar.emit(res);
      },
      err => {
        this.toast.error("Failed to edit car!");
      }
    )
  }
}
