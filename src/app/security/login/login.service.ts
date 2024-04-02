import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable, catchError, map } from "rxjs";
import { environment } from "../../../environments/environment";

@Injectable({
  providedIn:'root',
})

export class Loginservice{
  constructor(private httpClient:HttpClient){

  }

  public signIn(login:string, password:string):Observable<any>{

    const url = `${environment.baseUrlBackend}/auth/signin`;


    return this.httpClient.post(url, {login, password}, {responseType:'json'}).pipe(
      map((data)=>this.setTokenLocalStorage(data)),
      catchError((err)=>{
        this.removerTokenLocalStorage();
        throw 'Falha ao efetuar signIn.'
      })
    )
  }

  public signUp(firstName:string,lastName:string,email:string,login:string, password:string){
    const url = `${environment.baseUrlBackend}/auth/signup`;


    return this.httpClient.post(url, {firstName, lastName, email, login, password}, {responseType:'json'}).pipe(
      map((data)=>this.setTokenLocalStorage(data)),
      catchError((err)=>{
        this.removerTokenLocalStorage();
        throw 'Falha ao efetuar signUp.'
      })
    )
  }


public getToken():string | null{
  return localStorage.getItem(environment.token);

}

private setTokenLocalStorage(response: any) {
  const { type, token, _ } = response;
  localStorage.setItem(environment.token, token);
}

private removerTokenLocalStorage():void{
  localStorage.removeItem(environment.token);
}

}
