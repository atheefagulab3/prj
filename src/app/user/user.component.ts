import { Component } from '@angular/core';
import { AuthenticatorService } from '../authenticator.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent {


  constructor(private authService: AuthenticatorService,private route:Router) { }
  ngOnInit() {
    
  }

  User(UserName:string, password:string,Email:string)
  {
    return this.authService.User(UserName, password,Email).subscribe(
      (Response)=>
      {
        if(confirm("successfully logged in"))
        {
        this.route.navigate(['/home'])
        }
      },
      (error)=>
      {
        alert("Enter correct  name or password!!!");
      } 
    )
  }
  }


