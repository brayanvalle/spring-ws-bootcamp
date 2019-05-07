import { Component, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Users';
  
  constructor(private router:Router){};

  ViewUser(){ 
    this.router.navigate(["view"]);
  }

  NewUser(){ 
    this.router.navigate(["new"]);
  }
  
}
