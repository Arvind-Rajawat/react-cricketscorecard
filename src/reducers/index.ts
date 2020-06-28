import { combineReducers } from 'redux';
import  reducermethod   from './createTeamReducer';
import  scoreCardReducer  from './scoreCardReducer';

const  initialStateTeam = {
    TeamDetails: {},
    message: "",
    redirect:false
  };
  const initialStateScore = {
    TeamDetailsScore: {},
    message: "",    
  };

export interface RootState {
    reducermethod: typeof initialStateTeam,
    scoreCardReducer : typeof initialStateScore
  }


const rootReducer = combineReducers({      
    reducermethod,
    scoreCardReducer 
})

export default rootReducer;