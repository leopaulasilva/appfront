import { environment } from './../../../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from "@angular/core";
import { Observable } from 'rxjs';
import { User } from '../shared/user.model';
import { map } from 'rxjs/operators';

@Injectable({
    providedIn:'root'
})

export class UsersService{
    constructor(private httpClient:HttpClient){

    }

    public listAll():Observable<User[]>{
        const url = `${environment.baseUrlBackend}/users`;

        return this.httpClient.get(url).pipe(
            map(this.mapToUsers)
        )
    }

    public saveNew(newUser:User):Observable<User>{
        const url = `${environment.baseUrlBackend}/users`;

        return this.httpClient.post<User>(url, newUser);
    }


    private mapToUsers(data:any):Array<User>{
        const listUsers: User[] = [];
        data.forEach((e:any) => listUsers.push(Object.assign(new User, e))) 
        return listUsers;
    }


}