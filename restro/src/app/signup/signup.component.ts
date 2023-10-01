import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validator, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  myForm !: FormGroup;

  constructor(private fb: FormBuilder,private http: HttpClient, private router: Router) { }
  ngOnInit(): void {

    this.myForm = this.fb.group({   //why this  gesture :
      name: ['', Validators.required],
      email: ['', Validators.required],
      mobile: ['', Validators.required],
      passord: ['', Validators.required],
    });

  }

  //make method to create  user :  
  signup() {
    this.http.post<any>("http://localhost:4200/signup", this.myForm.value).subscribe(res => {
      alert("you are registered successfully!");
      this.myForm.reset();
      this.router.navigate(['login'])
    }, error => {
      alert("Something went wrong!!!");
    })
  }
}

