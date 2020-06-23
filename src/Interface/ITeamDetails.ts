
import TeamDetail from './teamDetail';
export default interface  ITeamDetails {
  
    newmatch :  {    
    balls : Ball[];   
    id : string;
     currentBatting:number;
     maxBalls?: number;
     startedBy: number;
     team:TeamDetail[];
     statusText?: string;
     status : string;
     runRate?: number;
     score?: number;
     toss:  number
     currentBowling: number
    
    }   
}

interface  Ball {      
    ballDesc: string;   
    ballNumber: number; 
}

  