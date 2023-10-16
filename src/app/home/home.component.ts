import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import { AuthenticatorService } from '../authenticator.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  wid!:number;
  Workout:any[]=[]
  
  constructor(private router : Router,private authService : AuthenticatorService) { }

  ngOnInit(): void {
  }
  isUserAuthenticated = (): boolean => {
    return false
  }
  
  logOut = () => {
    localStorage.removeItem("jwt");
  }
  Checking()
  {
    if(!localStorage.getItem("jwtToken"))
    {
      alert("please sign in ")
      this.router.navigate(['/sign'])
    }
  }
  logout() {
    if(this.authService.getToken())
    this.authService.clearToken();
  }

}
