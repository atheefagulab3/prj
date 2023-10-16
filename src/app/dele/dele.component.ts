import { Component } from '@angular/core';
import { FitnessService } from '../fitness.service';
import { Exercise } from '../Workout';

@Component({
  selector: 'app-dele',
  templateUrl: './dele.component.html',
  styleUrls: ['./dele.component.css']
})
export class DeleComponent {
  exe?:Exercise[]
  postIdToDelete!: number 

  constructor(private aspire: FitnessService) {}

  
  deletePost() {
    if (this.postIdToDelete) {
      this.aspire.deletee(this.postIdToDelete).subscribe(
        (): void => {
          console.log('Post deleted successfully');
          
        },
        error => {
          console.error('Error deleting post');
          alert('deleted');
        }
      );
    }
  }
}
