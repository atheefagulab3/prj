import { Component } from '@angular/core';
import { Exercise } from '../Workout';
import { FitnessService } from '../fitness.service';
import { ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-updatee',
  templateUrl: './updatee.component.html',
  styleUrls: ['./updatee.component.css']
})
export class UpdateeComponent {
  exe :Exercise={
    eid: 0,
    wid: 0,
    supplement: '',
    timeFrame: '',
    wkSet: 0,
    wkRep: 0,
    equipmentRequired: '',
    diet: ''
  };
 eid:number=0;
  constructor(private apiser:FitnessService , private route :ActivatedRoute){}
  
  ngOnInit(): void{ 
    this.route.paramMap.subscribe((params: ParamMap) => {
      const eid = Number(params.get('eid'));
      // Call the service method to fetch the reader by ID and update the form
      this.apiser.getExerciseById(eid).subscribe( (reader: Exercise) => { this.exe = reader},
        (error) => {
          console.error('Error retrieving reader:', error);
        }
      );
    });
  }
  

  updatexe(){
    this.apiser.updatee(this.eid,this.exe)
    .subscribe(
      update=>{
      console.log('updated',update)
    }
    )
    
  }
 
}
