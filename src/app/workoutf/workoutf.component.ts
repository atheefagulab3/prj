import { Component } from '@angular/core';
import { Workout } from '../Workout';
import { FitnessService } from '../fitness.service';

@Component({
  selector: 'app-workoutf',
  templateUrl: './workoutf.component.html',
  styleUrls: ['./workoutf.component.css']
})
export class WorkoutfComponent {
  intensity!:string;
workouts:any[]=[]

constructor(private apiser:FitnessService){}

ngOnInit():void{

}
fetchWorkouts() {
  this.apiser.getDatabyin(this.intensity)
    .subscribe(
      (data: any) => {
        this.workouts = data;
      },
      (error: any) => {
        console.log(error);
      }
    );
}
}
