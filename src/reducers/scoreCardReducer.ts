import ITeamDetails from '../Interface/index';
import { Action } from 'redux';
import { SubmitTeamActionTypes } from '../Interface/types';

const initialStateScore = {
    TeamDetailsScore: {},
    message: "",    
  };  
    const scoreCardReducer = (state = initialStateScore, action: any) => {
    debugger;
    switch (action.type) {
      case "START_OVER_ASYNC":
        return {
          ...state,
          TeamDetailsScore: action.payload, 
          message: "UPDATED",
         
        };    
      default:
        return state;
    }
  };
  
  export default scoreCardReducer;