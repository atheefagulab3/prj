import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Exercise } from 'src/app/Workout';

import { FitnessService } from 'src/app/fitness.service';

@Component({
  selector: 'app-exercise',
  templateUrl: './exercise.component.html',
  styleUrls: ['./exercise.component.css']
})
export class ExerciseComponent {
  Eid!:number;
  public  exe? :Exercise[]
   
 
 constructor(private apiser:FitnessService,private router:Router){}
 
 ngOnInit(): void{
 this.Fetche();
 }
 Fetche(){
   return this.apiser.getExercise().subscribe(data=>this.exe=data)
 }
 delete(eid:number){
  this.apiser.deletee(eid).subscribe(
    (): void => {
      console.log('Post deleted successfully');
      
    },
    error => {
      console.error('Error deleting post');
      alert('deleted');
    }
  );

  }
 put(eid:number){
   this.router.navigate(['/upexe',eid])
 }
 Checking()
 {
   if(!localStorage.getItem("jwtToken"))
   {
     alert("please sign in ")
     this.router.navigate(['/sign'])
   }
 }
}

