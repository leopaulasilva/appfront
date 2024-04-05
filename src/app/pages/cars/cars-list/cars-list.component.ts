import { ToastrService } from 'ngx-toastr';
import { CarsService } from './shared/car.service';
import { Component, OnInit } from '@angular/core';
import { Car } from './shared/car.model';

@Component({
  selector: 'app-cars-list',
  templateUrl: './cars-list.component.html',
  styleUrl: './cars-list.component.css'
})
export class CarsListComponent implements OnInit {
  
  public listCars:Array<Car>=[];

  constructor(private carsService:CarsService, private toastrService:ToastrService){

  }
  ngOnInit(): void {
    this.carsService.listAll().subscribe(
      res=>{this.listCars=res}
    )
  }


  public deleteCar(carId:any){
    if(!window.confirm(`Do you want to delete the car id: ${carId} ?`)){
      return
    }
    this.carsService.delete(carId).subscribe(
      res=>{
        this.toastrService.success(`Car id ${carId} was deleted`)
        this.listCars=this.listCars.filter(e=>e.id !=carId);
      },
      err=>{
        this.toastrService.error(`Error to delete the car id ${carId}`)
      }
    )
  }

  updateList($event:Car){
    this.listCars.push($event)
  }
}
