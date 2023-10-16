import { Component } from '@angular/core';
import { Workout } from '../Workout';
import { FitnessService } from '../fitness.service';

@Component({
  selector: 'app-wid',
  templateUrl: './wid.component.html',
  styleUrls: ['./wid.component.css']
})
export class WidComponent {
  wid!:number;
  work?:Workout;
  
  constructor(private apiser:FitnessService){}
  
  ngOnInit():void{

  }
  getbyid(){
    return this.apiser.getWorkoutById(this.wid).subscribe((data : any) =>{
      this.work = data;
    },
    (error: any) => {
      alert('There is not Exercise for the particular exercise');
    })
  }
}
