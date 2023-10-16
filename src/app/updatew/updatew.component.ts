import { Component } from '@angular/core';
import { Workout } from '../Workout';
import { FitnessService } from '../fitness.service';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';

@Component({
  selector: 'app-updatew',
  templateUrl: './updatew.component.html',
  styleUrls: ['./updatew.component.css']
})
export class UpdatewComponent {
  work :Workout={
    wid: 0,
    wname: '',
    trainer: '',
    intensity: '',
    wdate: new Date,
    wimage:' ',
    duration: '',
    maingoal: '',
    exercise: []
  };
 wid:number=0;
 
constructor(private apiser:FitnessService,private route:ActivatedRoute){}
  
  // ngOnInit(): void{ }

  // update(){
  //   this.apiser.updatew(this.wid,this.work)
  //   .subscribe(update=>{
  //     console.log('updated',update)
  //   })
  // }
  
  ngOnInit():void{
    {
      this.route.paramMap.subscribe((params: ParamMap) => {
        const wid = Number(params.get('wid'));
        this.wid=wid
        // Call the service method to fetch the reader by ID and update the form
        this.apiser.getWorkoutById(wid).subscribe( (work: Workout) => {
          this.work = work;
        },
        // (reader: Workout) => { this.work = reader},
          (error) => {
            alert("sorrry")
          }
        );
      });
    }
  }

  
    //   this.apiser.updatew(this.work)
    // //  .subscribe(updatew=>{alert('updated') })
    //   .subscribe(_climate=>{ alert("Updated") })

    put(){
    this.apiser.updatew(this.work).subscribe(
      updated =>{
        console.log('Workout updated:', updated);
        alert('Workout updated successfully');
      },
      (error) => {
       
        alert('Failed to update workout');
      }
  
  );
}
}
