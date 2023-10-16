// import { Component } from '@angular/core';
// import { Workout } from '../Workout';
// import { FitnessService } from '../fitness.service';
// import { Router } from '@angular/router';

// @Component({
//   selector: 'app-workouti',
//   templateUrl: './workouti.component.html',
//   styleUrls: ['./workouti.component.css']
// })
// export class WorkoutiComponent {
//   work :Workout={
//     wname: ' ',
//     trainer: ' ',
//     intensity: ' ',
//     wdate: new Date,
//     wimage:'',
//     duration: ' ',
//     maingoal: ' ',
//     wid: 0,
//     exercise: []
//   };
//     selectedFile: File | null = null;
//   successMessage: boolean = false;
//   errorMessage: string = '';
//   constructor(private apiser:FitnessService ,private route :Router){}
//   onFileSelected(event: any): void {
//     this.selectedFile = event.target.files[0];
//   }
//   ngOnInit(): void{
  
//   }
//   posth(){
//     this.apiser.createw(this.work).subscribe(work =>
//       {
//         console.log('create ',work);
//         alert("welcome to our family of Fitness");
//         if(confirm("successfully logged in"))
//         {
//           this.route.navigate(['/work'])
//         }
//       })
//   }
// }
import { Component } from '@angular/core';
import { Workout } from '../Workout';
import { FitnessService } from '../fitness.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-workouti',
  templateUrl: './workouti.component.html',
  styleUrls: ['./workouti.component.css']
})
export class WorkoutiComponent {
  work: Workout = {
    wname: '',
    trainer: '',
    intensity: '',
    wdate: new Date(),
    wimage: '',
    duration: '',
    maingoal: '',
    wid: 0,
    exercise: []
  };
  selectedFile: File | null = null;
  successMessage: boolean = false;
  errorMessage: string = '';

  constructor(private apiService: FitnessService, private router: Router) { }

  onFileSelected(event: any): void {
    this.selectedFile = event.target.files[0];
  }

  posth(): void {
    this.apiService.createw(this.work).subscribe(
      (work: Workout) => {
        console.log('Created workout:', work);
        alert('Welcome to our Fitness family!');
        if (confirm('Successfully logged in. Go to workouts?')) {
          this.router.navigate(['/work']);
        }
      },
      (error: any) => {
        this.errorMessage = 'An error occurred while creating the workout.';
        console.error('Error creating workout:', error);
      }
    );
  }
}
