import { ActivatedRoute } from '@angular/router';
import { CarsService } from './../cars-list/shared/car.service';
import { Component, OnInit } from '@angular/core';
import { Car } from '../cars-list/shared/car.model';

@Component({
  selector: 'app-cars-view',
  templateUrl: './cars-view.component.html',
  styleUrl: './cars-view.component.css'
})
export class CarsViewComponent implements OnInit{
  
  public car:Car | any = null;
  constructor(private carsService:CarsService, private activatedRoute:ActivatedRoute){

  }
  
  ngOnInit(): void {
    const carId:number=Number(this.activatedRoute.snapshot.paramMap.get('id'))
    this.carsService.listById(carId).subscribe(
      res=>this.car=res
    )
    
  }


}
