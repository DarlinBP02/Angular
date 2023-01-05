import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  formLogin: FormGroup;
  loading=false;

  constructor(
    private userService: UserService,
    private router: Router
  ) {
    this.formLogin = new FormGroup({
      email: new FormControl(),
      password: new FormControl()
    })
  }

  ngOnInit(): void {
  }

  onSubmit() {
    this.loading=true;
    this.userService.login(this.formLogin.value)
      .then(response => {
        console.log(response);
        setTimeout(() => {
        this.router.navigate(['dashboard']);
      }, 1500);

      })
      .catch(error => console.log(error));
  }

  onClick() {
    this.loading=true;
    this.userService.loginWithGoogle()
      .then(response => {
        console.log(response);
        setTimeout(() => {
        this.router.navigate(['dashboard']);
      }, 1500);
      })
      .catch(error => console.log(error))
  }

}


