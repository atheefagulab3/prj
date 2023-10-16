import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WorkoutComponent } from './workout/workout.component';
import { ExerciseComponent } from './workout/exercise/exercise.component';
import { HomeComponent } from './home/home.component';
import { WorkoutiComponent } from './workouti/workouti.component';
import { ExerciseiComponent } from './workouti/exercisei/exercisei.component';
import { WorkoutfComponent } from './workoutf/workoutf.component';
import { UserComponent } from './user/user.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { CountwComponent } from './countw/countw.component';
import { CounteComponent } from './countw/counte/counte.component';
import { DateComponent } from './date/date.component';
import { WorkoutwidComponent } from './workoutwid/workoutwid.component';
import { TripleComponent } from './triple/triple.component';
import { AdminComponent } from './admin/admin.component';
import { UpdatewComponent } from './updatew/updatew.component';
import { UpdateeComponent } from './updatee/updatee.component';


const routes: Routes = [
  {path:'',redirectTo:'/home',pathMatch:'full'},
  {path:'home',component:HomeComponent},
  {path:'work',component:WorkoutComponent},
  {path:'exe',component:ExerciseComponent},
  {path:'workouti',component:WorkoutiComponent},
  {path:'exercisei',component:ExerciseiComponent},
  {path:'inten',component:WorkoutfComponent},
  {path:'sign',component :UserComponent},
  {path:'signup',component:SignUpComponent},
  {path:'wcount',component:CountwComponent},
  {path:'ecount',component:CounteComponent},
  {path:'datew',component:DateComponent},
  {path:'triple',component:TripleComponent},
  {path:'wid/:eid',component:WorkoutwidComponent},
  {path:'admin',component:AdminComponent},
  {path:'upwork/:wid',component:UpdatewComponent},
  {path:'upexe/:eid',component:UpdateeComponent},
  {path:'**',redirectTo:'/home'}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
