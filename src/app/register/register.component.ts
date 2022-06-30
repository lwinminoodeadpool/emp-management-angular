import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { ServerServices } from '../home/server.serves';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  registerName: string ='';
  registerEmail: string ='';
  registerPassword: string ='';

  ngOnInit(): void {
  }
  
  constructor(
    private router: Router,
    private server: ServerServices
  ) { } 
  
  btnRegister(f:NgForm){
    console.log("gg")
    this.server.postRegister(this.registerName,this.registerEmail,this.registerPassword).subscribe(data => {
      console.log(data)
      alert("Successfully registered")
      f.reset()
      this.router.navigate([''])
    
    })
  }
}
