import { Component } from '@angular/core';
import { FitnessService } from '../fitness.service';
import { Workout } from '../Workout';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-workout',
  templateUrl: './workout.component.html',
  styleUrls: ['./workout.component.css']
})
export class WorkoutComponent {
  wid!:number;
   work? :Workout[];
  

constructor(private apiser:FitnessService,private router :Router){}

ngOnInit(): void{
  this.Fetch();
}
Fetch(){
  return this.apiser.getWorkout().subscribe(data=>this.work=data)
}
deletew(wid:number) {
   
    this.apiser.deletew(wid).subscribe(
      (): void => {
        console.log('Post deleted successfully');
        
      },
      error => {
        console.error('Error deleting post');
        alert('deleted');
      }
    );
  
}
put(wid:number){
  this.router.navigate(['/upwork',wid])
}
}




