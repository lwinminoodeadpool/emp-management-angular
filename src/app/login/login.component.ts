import { Component, NgModule, OnInit, ViewChild } from '@angular/core';
import { NgForm, NgModel } from '@angular/forms';
import { Router } from '@angular/router';
import { ServerServices } from '../home/server.serves';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  @ViewChild('g') loginForm = NgForm;
  username: string = '';
  password: string = '';
  data: any;

  ngOnInit(): void {
  }

  onSubmit() {
    console.log("wtf")
    this.server.getLogin(this.username, this.password).subscribe((data: any) => {

      console.log(data)

      this.data = data
      if (this.data.userStatus == "ENABLED") {
        sessionStorage.setItem('user', JSON.stringify(this.data))
        alert("Login success")
        this.router.navigate(['/viewemp'])
      }
      else {
        alert(JSON.stringify(this.data))
      }
    })
  }

  constructor(
    private router: Router,
    private server: ServerServices
  ) { }
}
