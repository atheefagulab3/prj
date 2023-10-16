import { Component } from '@angular/core';
import { User } from '../Workout';
import { FitnessService } from '../fitness.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent {
user:User={
  userId: 0,
  userName: '',
  password: '',
  email: ''
}
  constructor(private apiser:FitnessService){}
  
  ngOnInit(): void{
  
  }
  userin(){
    this.apiser.postuser(this.user).subscribe(user =>
      {
        console.log('create ',user);
        alert("successful");
      })
  }


}
