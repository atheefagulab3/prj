import { Component } from '@angular/core';
import { AdminauthService } from '../adminauth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent {

  constructor(private authService: AdminauthService,private route:Router) { }
  ngOnInit() {
    
  }

  Admin(adminName: string, adminPassword: string)
  {
    return this.authService. Admin(adminName, adminPassword).subscribe(
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
