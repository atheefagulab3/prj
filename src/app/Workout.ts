export interface Workout {
      wid: number;
      wname : string ;
      trainer: string;
      intensity: string ;
      wdate: Date;
      wimage :string;
      duration: string;
      maingoal: string;
     exercise: Exercise[];
}

export interface Exercise{
      eid: number;
      wid: number;
      supplement: string;
      timeFrame: string;
      wkSet: number;
      wkRep: number;
      equipmentRequired: string;
      diet: string;
  
  }
  export interface User{
      userId: number,
    userName: string,
    password: string,
    email: string
  }
 