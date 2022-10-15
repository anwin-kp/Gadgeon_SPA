import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  registerForm!: FormGroup

  constructor(private formbuilder: FormBuilder, private http: HttpClient, private router: Router) {

  }

  ngOnInit(): void {
    this.registerForm = this.formbuilder.group({
      FirstName: [''],
      LastName: [''],
      Age:[''],
      email: [''],
      password: ['']
    })

  }
  signup() {
    this.http.post<any>('http://localhost:3000/user', this.registerForm.value).subscribe(rs => {
      alert("Successful")
      this.registerForm.reset
    })
  }

}
