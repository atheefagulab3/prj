import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WorkoutComponent } from './workout/workout.component';
import { FormsModule } from '@angular/forms';
import {  HttpClientModule,HTTP_INTERCEPTORS } from '@angular/common/http';
import { ExerciseComponent } from './workout/exercise/exercise.component';
import { WorkoutiComponent } from './workouti/workouti.component';
import { ExerciseiComponent } from './workouti/exercisei/exercisei.component';
import { WorkoutfComponent } from './workoutf/workoutf.component';
import { HomeComponent } from './home/home.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { UserComponent } from './user/user.component';
import { WorkoutwidComponent } from './workoutwid/workoutwid.component';
import { TripleComponent } from './triple/triple.component';
import { AuthenticatorService } from './authenticator.service';
import { AuthInterceptorService } from './auth-interceptor.service';
import { DateComponent } from './date/date.component';
import { AdminComponent } from './admin/admin.component';
import { CountwComponent } from './countw/countw.component';
import { CounteComponent } from './countw/counte/counte.component';
import { AdminauthService } from './adminauth.service';
import { UpdatewComponent } from './updatew/updatew.component';
import { WidComponent } from './wid/wid.component';
import { EidComponent } from './eid/eid.component';
import { UpdateeComponent } from './updatee/updatee.component';
import { DelwComponent } from './delw/delw.component';
import { DeleComponent } from './dele/dele.component';
import { AdmincComponent } from './adminc/adminc.component';


@NgModule({
  declarations: [
    AppComponent,
    WorkoutComponent,
    ExerciseComponent,
    WorkoutiComponent,
    ExerciseiComponent,
    WorkoutfComponent,
    HomeComponent,
    SignUpComponent,
    UserComponent,
    WorkoutwidComponent,
    TripleComponent,
    DateComponent,
    AdminComponent,
    CountwComponent,
    CounteComponent,
    UpdatewComponent,
    WidComponent,
    EidComponent,
    UpdateeComponent,
    DelwComponent,
    DeleComponent,
    AdmincComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [AuthenticatorService,AdminauthService,{
    provide:HTTP_INTERCEPTORS,
    useClass:AuthInterceptorService,
    multi:true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
