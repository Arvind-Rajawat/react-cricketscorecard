 import ITeamDetails from './index';
import { Action,ActionCreator,ActionCreatorsMapObject } from 'redux';

export const TEAM_DETAILS = 'TEAM_DETAILS'
export const START_OVER = 'START_OVER'
export const SUBMIT_TEAM_DETAILS = 'SUBMIT_TEAM_DETAILS'
export const START_OVER_ASYNC = 'START_OVER_ASYNC'

interface SubmitFormWatcherAction {
  type:  "TEAM_DETAILS"
  payload: ITeamDetails["newmatch"]
}
interface StartOverWatcherAction {
  type:  "START_OVER"
  payload: ITeamDetails["newmatch"]
 
}
interface SubmitFormDataAction {
  type:  "SUBMIT_TEAM_DETAILS"
  payload: ITeamDetails
}
interface StartOverDataAction {
  type:  "START_OVER_ASYNC"
  payload: ITeamDetails 
}

export type TeamActionTypes = SubmitFormWatcherAction | StartOverWatcherAction

export type SubmitTeamActionTypes = SubmitFormDataAction | StartOverDataAction

  
  

  
  
