import { Component } from '@angular/core';
import { Workout } from '../Workout';
import { FitnessService } from '../fitness.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-delw',
  templateUrl: './delw.component.html',
  styleUrls: ['./delw.component.css']
})
export class DelwComponent {
  work?:Workout[]
  postIdToDelete!: number 

  constructor(private aspire: FitnessService,private route :Router) {}

  
  deletew() {
    if (this.postIdToDelete) {
      this.aspire.deletew(this.postIdToDelete).subscribe(
        (): void => {
          console.log('Post deleted successfully');
          
        },
        error => {
          console.error('Error deleting post');
          if(confirm('deleted')){
            this.route.navigate(['/home'])
            
          }
        }
      );
    }
  }
}
