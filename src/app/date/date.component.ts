import { Component } from '@angular/core';
import { FitnessService } from '../fitness.service';

@Component({
  selector: 'app-date',
  templateUrl: './date.component.html',
  styleUrls: ['./date.component.css']
})
export class DateComponent {
  wdate!:Date;
  workouts:any[]=[]
  
  constructor(private apiser:FitnessService){}
  
  ngOnInit():void{
  
  }
  fetchdate() {
    this.apiser.getdate(this.wdate)
      .subscribe(
        (data: any) => {
          this.workouts = data;
        },
        (error: any) => {
          alert("there is not workouts that we can provide at that time");
        }
      );
  }
}
