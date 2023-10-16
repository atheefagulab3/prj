import { Component } from '@angular/core';
import { FitnessService } from '../fitness.service';

@Component({
  selector: 'app-countw',
  templateUrl: './countw.component.html',
  styleUrls: ['./countw.component.css']
})
export class CountwComponent {
  wid!:number;
  Workout:any[]=[]
  constructor(private apiser:FitnessService){}
  
  ngOnInit():void{
    this.fetchcountw();
  }
  fetchcountw() {
    this.apiser.getcountw()
      .subscribe(
        (data: any) => {
          this.Workout = data;
        },
        (error: any) => {
          console.log(error);
        }
      );
  }
}
