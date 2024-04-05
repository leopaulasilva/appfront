import { environment } from './../../../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from "@angular/core";
import { Observable } from 'rxjs';
import { Car } from '../shared/car.model';
import { map } from 'rxjs/operators';

@Injectable({
    providedIn:'root'
})

export class CarsService{
    
    constructor(private httpClient:HttpClient){

    }

    public listAll():Observable<Car[]>{
        const url = `${environment.baseUrlBackend}/cars`;

        return this.httpClient.get(url).pipe(
            map(this.mapToCars)
        )
    }

    public listById(id:number):Observable<Car>{
        const url = `${environment.baseUrlBackend}/cars/${id}`;
        return this.httpClient.get(url).pipe(
            map(this.mapToCar))

        
    }

    public listByUserId(userId: number):Observable<Car[]>{
        const url = `${environment.baseUrlBackend}/cars/user/${userId}`;
        return this.httpClient.get<Car[]>(url);
      }



    public saveNew(newCar:Car):Observable<Car>{
        const url = `${environment.baseUrlBackend}/cars`;

        return this.httpClient.post<Car>(url, newCar);
    }


    public update(car:Car):Observable<Car>{
        const url = `${environment.baseUrlBackend}/cars/${car.id}`;

        return this.httpClient.put<Car>(url, car);
    }


    public delete(carId:number):Observable<any>{
        const url = `${environment.baseUrlBackend}/cars/${carId}`;
        return this.httpClient.delete(url, {responseType:'json'});
    }

    private mapToCars(data:any):Array<Car>{
        const listCars: Car[] = [];
        data.forEach((e:any) => listCars.push(Object.assign(new Car, e))) 
        return listCars;
    }

    private mapToCar(data:any):Car{
        return (Object.assign(new Car, data));
    }

}