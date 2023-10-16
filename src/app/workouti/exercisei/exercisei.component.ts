import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Exercise, Workout } from 'src/app/Workout';
import { FitnessService } from 'src/app/fitness.service';

@Component({
  selector: 'app-exercisei',
  templateUrl: './exercisei.component.html',
  styleUrls: ['./exercisei.component.css']
})
export class ExerciseiComponent {
  exe: Exercise={
    eid:0,
    wid: 0,
    supplement: ' ',
    timeFrame: ' ',
    wkSet: 0,
    wkRep: 0,
    equipmentRequired: ' ',
    diet: ' ',
  };
  constructor(private apiser:FitnessService,private route:Router){}
  
  ngOnInit(): void{
  
  }
  poste(){
    this.apiser.createe(this.exe).subscribe(exe =>
      {
        
        if(confirm("successfully logged in"))
        {
          this.route.navigate(['/exe'])
        }
      })
  }
}
