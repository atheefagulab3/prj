import { Component } from '@angular/core';
import { Exercise } from '../Workout';
import { FitnessService } from '../fitness.service';

@Component({
  selector: 'app-eid',
  templateUrl: './eid.component.html',
  styleUrls: ['./eid.component.css']
})
export class EidComponent {
  eid!:number;
  exe?:Exercise
  
  constructor(private apiser:FitnessService){}
  
  ngOnInit():void{
  
  }
  getbyid(){
    return this.apiser.getExerciseById(this.eid).subscribe(data=>this.exe=data)
  }
}
