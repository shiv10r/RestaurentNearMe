import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validator, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponentn implements OnInit {

  formValue!:FormGroup

  constructor(private fb: FormBuilder,private http: HttpClient, private router: Router) { }
 
  ngOnInit(): void {

    this.formValue = this.fb.group({  
      mobile: ['', Validators.required],
      passord: ['', Validators.required],
    });

  }

  //make method to sign user :  
  login() {
    this.http.get<any>("http://localhost:4200/signup").subscribe(res => {
      const  user =  res.find((a:any) =>{
        return a.email === this.formValue.value.email && a.passord === this.formValue.value.passord
      });
      if(user){
        alert("user  successful login")
      }else{
        alert("user  not  found");
      }
    },error =>{
        alert ("Something  wnet wrong")

      })
  }
}

