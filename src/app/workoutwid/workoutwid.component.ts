import { Component } from '@angular/core';
import { FitnessService } from '../fitness.service';

@Component({
  selector: 'app-workoutwid',
  templateUrl: './workoutwid.component.html',
  styleUrls: ['./workoutwid.component.css']
})
export class WorkoutwidComponent {
  wid!:number;
 Exercise:any[]=[]

constructor(private apiser:FitnessService){}

ngOnInit():void{

}
getbywid() {
  this.apiser.getDatabyid(this.wid)
    .subscribe(
      (data: any) => {
        this.Exercise = data;
      },
      (error) => {
        alert('sorry we do not provide this exercise');
      }
    );
}
}
