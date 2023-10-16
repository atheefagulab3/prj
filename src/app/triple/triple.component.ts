import { Component } from '@angular/core';
import { FitnessService } from '../fitness.service';

@Component({
  selector: 'app-triple',
  templateUrl: './triple.component.html',
  styleUrls: ['./triple.component.css']
})
export class TripleComponent {
  supplement!:string;
  timeframe!:string;
  wkset!: number;

  exercise:any[]=[]
  
  constructor(private apiser:FitnessService){}
  
  ngOnInit():void{
  
  }
  triple() {
    this.apiser.gettriple(this.supplement,this.timeframe,this.wkset)
      .subscribe(
        (data: any) => {
          this.exercise = data;
        },
        (error) => {
          alert('We do not have these requirements together');
        }
      );
  }
}
