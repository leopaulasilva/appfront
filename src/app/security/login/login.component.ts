import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Loginservice } from './login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  isSignUpFormVisible = false; // Property for tracking form state
  isSignInFormVisible = true; // Property for tracking form state

  public formSignIn: FormGroup;
  public formSignUp: FormGroup; // Form group for signup


  constructor(private fb:FormBuilder, private loginService: Loginservice, private route:Router, private toast:ToastrService){
    this.formSignIn = this.createFormSignIn();
    this.formSignUp = this.createFormSignUp();
  }


  ngOnInit(): void {
    this.formSignIn = this.createFormSignIn();
    this.formSignUp = this.createFormSignUp(); // Create the signup form
  }

  public createFormSignIn():FormGroup{

    return this.fb.group({
      login:["",[Validators.required]],
      password:["",[Validators.required, Validators.minLength(6)]]
    })
  }

  public createFormSignUp(): FormGroup {
    return this.fb.group({
      firstName:["",[Validators.required]],
      lastName:["",[Validators.required]],
      login:["",[Validators.required]],
      email:["",[Validators.required, Validators.email]],
      password:["",[Validators.required, Validators.minLength(6)]]
    })
  }


public isForControlInvalidSignIn(controlName:string):boolean{
  return!!(this.formSignIn.get(controlName)?.invalid && this.formSignIn.get(controlName)?.touched)
}

public submmitSignInForm(){

  const {login,password}=this.formSignIn.value;
  this.formSignIn.reset;

  this.loginService.signIn(login,password).subscribe(
    res=>{
      this.toast.success("Login efetuado com sucesso");
      this.route.navigate([''])
    },
    err=>{
      this.toast.error(err);
    }
  )
}

public isForControlInvalidSignUp(controlName:string):boolean{
  return!!(this.formSignUp.get(controlName)?.invalid && this.formSignUp.get(controlName)?.touched)
}

public submmitSignUpForm() {

  const {firstName,lastName,email,login,password}=this.formSignUp.value;
  this.formSignUp.reset;

  this.loginService.signUp(firstName,lastName,email,login,password).subscribe(
    res=>{
      this.toast.success("SignUp efetuado com sucesso");
      this.route.navigate([''])
    },
    err=>{
      this.toast.error(err);
    }
  )
}

goBackToSignin() {
  this.isSignUpFormVisible = false;
  this.isSignInFormVisible = true;
}

goToSignUp() {
  this.isSignInFormVisible = false;
  this.isSignUpFormVisible = true;
}



}
