import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Router } from "@angular/router";


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  submitted: boolean = false;
  invalidLogin: boolean = false;
  constructor(private formBuilder: FormBuilder, private router: Router) { }



  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      email: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  // Login submit Method
  onSubmit() {
    this.submitted = true;
    if (this.loginForm.invalid) {
      return;
    }
    if (this.loginForm.controls.email.value == 'Admin@gmail.com' && this.loginForm.controls.password.value == 'Admin@123') {
      this.router.navigate(['list-user']);
      this.fakeDataInject();
    } else {
      this.invalidLogin = true;
    }
  }
  // Injecting Sample Data Method
  fakeDataInject() {
    var fakeData = [
      {
        "id": 1544202916175,
        "userName": "Yoga Nanthan1",
        "email": "Yoga@yopmail.com",
        "firstName": "Yoga",
        "lastName": "Nanthan1",
        "phone": "9876543210"
      },
      {
        "id": 1544202938501,
        "userName": "Arul Ananth",
        "email": "Arul@yopmail.com",
        "firstName": "Arul",
        "lastName": "Ananth",
        "phone": "987541366"
      },
      {
        "id": 1544203433446,
        "userName": "Sae nanthan",
        "email": "YogaSae@gmail.com",
        "firstName": "Sae",
        "lastName": "nanthan",
        "phone": "987452136"
      },
      {
        "id": 1544203433447,
        "userName": "Senthil",
        "email": "Senthil@gmail.com",
        "firstName": "Senthil",
        "lastName": "nanthan",
        "phone": "987452256"
      },
      {
        "id": 1544203433448,
        "userName": "Mohan",
        "email": "Mohan@gmail.com",
        "firstName": "Mohan",
        "lastName": "Yogi",
        "phone": "987458556"
      },

    ];
    localStorage.setItem('userArray', JSON.stringify(fakeData));
  }

}
