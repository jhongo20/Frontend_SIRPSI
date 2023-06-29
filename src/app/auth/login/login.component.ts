import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { LoginService } from './login.service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { ThisReceiver } from '@angular/compiler';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
  
})
export class LoginComponent  {
  token: string|undefined;
  hide = true;
  captchaForm: FormGroup;
  loginForm: FormGroup;

  loginData = {
    nit : "346789",
    document: '1234567',
    password:'Admin123*.',
    aceptacion: Boolean 
  }

  constructor(private loginService: LoginService,
              private router: Router,
              private formBuilder: FormBuilder) {
                this.token = undefined;
                this.captchaForm= this.formBuilder.group({});
                this.loginForm = this.formBuilder.group({                  
                  document: ['',[Validators.required, this.trimValidator]],
                  password: ['',[Validators.required, this.trimValidator]],
                  nit: ['',[Validators.required, this.trimValidator]],
                  aceptacion: ['',[Validators.required]],
                })
  }
   
  login() {

    debugger
    this.loginService.login(this.loginData).subscribe((data:any) => {
      localStorage.setItem('token_value',data.token);
      localStorage.setItem('expiration',data.expiration);   
      localStorage.setItem('document', this.loginData.document); 
    Swal.fire({
      position: 'center',
      icon: 'success',
      title: 'Bienvenido',
      showConfirmButton: false,
      timer: 1500
    })  
      //this.router.navigateByUrl('validar2fa');
      this.router.navigateByUrl('inicio/dashboard');
    
    },
    (errorData) => 

    Swal.fire({
      icon: 'error',
      title:  errorData.error.message,
      text: errorData.error.displayMessage,
      footer: errorData.error.title
    })     
    );
  }

  trimValidator(control: AbstractControl): { [key: string]: boolean } | null {
    if (control.value && control.value.trim() !== control.value) {
      return { 'whitespace': true };
    }
    return null;
  }
  
  public send() {

    if (this.captchaForm.invalid) {
      console.log("valida form");
      for (const control of Object.keys(this.captchaForm.controls)) {
        this.captchaForm.controls[control].markAsTouched();
      }
      return;
    }
    
    console.log("Token "+ JSON.stringify(this.token) +" generated");
    console.debug(`Token [${this.token}] generated`);
  }
}