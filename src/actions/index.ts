import ITeamDetails from '../Interface/index';

export function TeamDetailsWatcher(formparams: ITeamDetails) {
  return {
    type: "TEAM_DETAILS",
    payload: formparams.newmatch
  }
}

export function SubmitTeamDetails(formparams: ITeamDetails) {
 
  return { type: 'SUBMIT_TEAM_DETAILS', payload: formparams };
}

export function StartOverWatcher(formparams: ITeamDetails){     
return {
  type: "START_OVER",
  payload: formparams.newmatch 
};    
}

export function StartOverData(formparams: ITeamDetails) {
return { type: 'START_OVER_ASYNC', payload: formparams };
}

