import { all } from 'redux-saga/effects';
import {  StartOverWatcherSaga, TeamDetailsWatcherSaga } from './saga'; 

 
export default function* rootSaga() {
  yield all([
    TeamDetailsWatcherSaga(),
    StartOverWatcherSaga ()
  ]);
}