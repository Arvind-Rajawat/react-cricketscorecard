import { SubmitTeamDetails,StartOverData } from '../actions'; 
import { takeLatest,  put, call } from 'redux-saga/effects';
import ITeamDetails from '../Interface/index';
import axios from 'axios';



import { Action } from 'redux';

interface AppAction extends Action { 
    payload: ITeamDetails;
}
function  SubmitAPI(newmatch : ITeamDetails) {
    return  axios.request({
      method: 'post',
      url: 'http://localhost:3001/db',
      data: newmatch,
      headers: {
        'Content-Type': 'application/json',
      }
    })
  }
function* SubmitTeamEffectSaga(action : AppAction)
  { 

       try {
        let newmatch = action.payload; 
        let { data } = yield  call(SubmitAPI, action.payload); 
        yield put(SubmitTeamDetails(newmatch)); 
    }
    catch (err) {       
        console.log("Error in Post" + err);      
    } 
  }
  function* StartOverEffectSaga(action : AppAction) {
    try {
      yield put(StartOverData(action.payload));  

    } catch (e) {
      
    }
  }
export  function* TeamDetailsWatcherSaga() {
    yield takeLatest('TEAM_DETAILS', SubmitTeamEffectSaga);
  }

  export  function* StartOverWatcherSaga() {  
    yield takeLatest('START_OVER', StartOverEffectSaga);
  }
    
