import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {  Exercise, User,Workout } from './Workout';
import { Token } from '@angular/compiler';


@Injectable({
  providedIn: 'root'
})
export class FitnessService {
  
  //this is getting all of the workout and exercise
  constructor(private http: HttpClient) { }
  getWorkout(): Observable<Workout[]> {
    const tokenString = localStorage.getItem('token');
    const tokenObject = JSON.parse(tokenString || '{}');
    
    // Set the token in the request headers
    const headers = new HttpHeaders().set('Authorization', `Bearer ${tokenObject.token}`);
    return this.http.get<Workout[]>('https://localhost:7154/api/Workout');
  }
  getExercise(): Observable<Exercise[]> {
    return this.http.get<Exercise[]>('https://localhost:7154/api/Exercise');
  }
  //this is for inserting in workout and exercise
  createw(work:Workout) :Observable<Workout>
  {
    return this.http.post<Workout>('https://localhost:7154/api/Workout',work)
  }
 
  createe(exe: Exercise) :Observable<Exercise>
  {
    return this.http.post<Exercise>('https://localhost:7154/api/Exercise',exe)
  }
  //this is for updating workout aand exercise
  updatew(work:Workout) :Observable<Workout>
  {
    const token = localStorage.getItem('jwtToken');
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      })
    };
    return this.http.put<Workout>(`https://localhost:7154/api/Workout/${work.wid}`,work,httpOptions)
    
  }

  updatee(eid:number,exei:Exercise) :Observable<Exercise>
  {
    return this.http.put<Exercise>(`https://localhost:7154/api/Exercise/${eid}`,exei)
  }
  //this is for deleting workout and exercise
  deletew(wid:number) :Observable<Workout>
  {
    return this.http.delete<Workout>(`https://localhost:7154/api/Workout/${wid}`)
  }

  deletee(eid:number) :Observable<Exercise>
  {
    return this.http.delete<Exercise>(`https://localhost:7154/api/Exercise/${eid}`)
  }
  //this is for intensity
  getDatabyin(intensity:string):Observable<Object>
  {
    return this.http.get<Object>(`https://localhost:7154/api/Workout/${intensity}`)
  }
  //this is for getting workout id in exercise
  getDatabyid(wid:number) :Observable<object>
  {
    return this.http.get<object>(`https://localhost:7154/api/Exercise/Filter/${wid}`)
  }
  //for triple
  gettriple(supplement:string,timeframe :string,wkset :Number):Observable<Object>
  {
    return this.http.get<Object>(`https://localhost:7154/api/Exercise/${supplement},${timeframe},${wkset}`)
  }
  //for date
  getdate(wdate:Date):Observable<Object>
  {
    return this.http.get<Object>(`https://localhost:7154/filter/${wdate}`)
  }
  //this is sign up
  postuser(User: User): Observable<User>
   {
    return this.http.post<User>('https://localhost:7154/api/User', User)
  }
  //count w
  getcountw():Observable<Workout>{
    return this.http.get<Workout>(`https://localhost:7154/api/Workout/Count`)
  }
  //count e
  getcounte():Observable<object>{
    return this.http.get<object>(`https://localhost:7154/api/Exercise/Count`)
  }
  //get by id
  getWorkoutById(wid:number):Observable<Workout>{
    return this.http.get<Workout>(`https://localhost:7154/fil/${wid}`)
  }

  getExerciseById(eid:number):Observable<Exercise>{
    return this.http.get<Exercise>(`https://localhost:7154/api/Exercise/${eid}`)
  }
}
