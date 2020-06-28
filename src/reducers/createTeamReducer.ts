 import ITeamDetails from '../Interface/index';
 import { SubmitTeamActionTypes } from '../Interface/types';
 import { Action } from 'redux';
 
const  initialStateTeam = {
  TeamDetails: {},
  message: "",
  redirect:false
};

  const reducermethod = (state = initialStateTeam, action: any) => {
  debugger;
  switch (action.type) {
    case "SUBMIT_TEAM_DETAILS":
      return {
        ...state,
        TeamDetails: action.payload, 
        message: "Form submitted!!",
        redirect: true
      };    
    default:
      return state;
  }
};

export default reducermethod;