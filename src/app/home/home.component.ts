import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServerServices } from './server.serves';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  public employees: any;

  constructor(
    private router: Router,
    private server: ServerServices
  ) { }

  ngOnInit(): void {

    const user = sessionStorage.getItem('user')
    console.log(user);
    if (!user) {
      this.router.navigate([''])
      return
    }
    this.server.getServers().subscribe((data: any) => {
      this.employees = data
      console.log(data)

    })
  }

  getLogout() {
    sessionStorage.removeItem('user');
  }

  onDelete(objectId: string) {
    console.log("click")
    this.server.deleteEmp(objectId).subscribe((data: any) => {
      console.log(data)
    })
  }

}
