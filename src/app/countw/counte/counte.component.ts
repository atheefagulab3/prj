import { Component } from '@angular/core';
import { FitnessService } from 'src/app/fitness.service';

@Component({
  selector: 'app-counte',
  templateUrl: './counte.component.html',
  styleUrls: ['./counte.component.css']
})
export class CounteComponent {
  eid!:number;
  Exercise:any[]=[]
  constructor(private apiser:FitnessService){}
  
  ngOnInit():void{
    this.fetchcounte();
  }
  fetchcounte() {
    this.apiser.getcounte()
      .subscribe(
        (data: any) => {
          this.Exercise = data;
        },
        (error: any) => {
          console.log(error);
        }
      );
  }
}
