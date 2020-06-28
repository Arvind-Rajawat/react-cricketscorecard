import React, {useState,useEffect,SyntheticEvent} from 'react';
import axios from 'axios';
import { makeStyles } from '@material-ui/core/styles';
import { useHistory } from "react-router-dom";
import "./ScoreCard.css";
import { Button,withWidth } from '@material-ui/core';
import  appStore  from './configureStore';
import  {StartOverWatcher}  from './actions';
import { bindActionCreators, AnyAction } from 'redux';
import { connect } from "react-redux";
import  rootReducer,{ RootState }  from './reducers';
import ITeamDetails from './Interface/index';
import {useDispatch} from 'react-redux';
import { TeamActionTypes } from './Interface/types';
const useStyles = makeStyles(theme => ({ 
  button: { 
    withWidth: "33.3%",
    margin: "1rem",
    marginBottom: "1rem !important",
    height: "5rem"
},
}));

let TeamDetails: ITeamDetails = {
  newmatch: { 
    id:"",       
    startedBy: 1,
    toss: 0,
    currentBatting: 0,
    maxBalls: 0,
    currentBowling : 0,
    status :"",
    balls: [
      {ballNumber: 0, ballDesc: "No ball has been bowled yet"},
    ],
    team: [
      {
        name: "",
        score: 0,
        ballsPlayed: 0,
        runRate: 0,
        currentStriker: 0,
        currentNonStriker: 0,
        currentBowler: 0,
        wickets:0,
        preBowler: 0,
        players : [
          {playerNumber: 1,playerName: "Player 1", runsScored : 0, fours: 0, sixes: 0, ballsFaced: 0, wickets: 0, ballsBowled: 0,runsGiven: 0, maidens: 0, out: 0},
          {playerNumber: 2,playerName: "Player 2", runsScored : 0, fours: 0, sixes: 0, ballsFaced: 0, wickets: 0, ballsBowled: 0,runsGiven: 0, maidens: 0, out: 0},
          {playerNumber: 3,playerName: "Player 3", runsScored : 0, fours: 0, sixes: 0, ballsFaced: 0, wickets: 0, ballsBowled: 0,runsGiven: 0, maidens: 0, out: 0},
          {playerNumber: 4,playerName: "Player 4", runsScored : 0, fours: 0, sixes: 0, ballsFaced: 0, wickets: 0, ballsBowled: 0,runsGiven: 0, maidens: 0, out: 0},
          {playerNumber: 5,playerName: "Player 5", runsScored : 0, fours: 0, sixes: 0, ballsFaced: 0, wickets: 0, ballsBowled: 0,runsGiven: 0, maidens: 0, out: 0},
          {playerNumber: 6,playerName: "Player 6", runsScored : 0, fours: 0, sixes: 0, ballsFaced: 0, wickets: 0, ballsBowled: 0,runsGiven: 0, maidens: 0, out: 0},
          {playerNumber: 7,playerName: "Player 7", runsScored : 0, fours: 0, sixes: 0, ballsFaced: 0, wickets: 0, ballsBowled: 0,runsGiven: 0, maidens: 0, out: 0},
          {playerNumber: 8,playerName: "Player 8", runsScored : 0, fours: 0, sixes: 0, ballsFaced: 0, wickets: 0, ballsBowled: 0,runsGiven: 0, maidens: 0, out: 0},
          {playerNumber: 9,playerName: "Player 9", runsScored : 0, fours: 0, sixes: 0, ballsFaced: 0, wickets: 0, ballsBowled: 0,runsGiven: 0, maidens: 0, out: 0},
          {playerNumber: 10,playerName: "Player 10", runsScored : 0, fours: 0, sixes: 0, ballsFaced: 0, wickets: 0, ballsBowled: 0,runsGiven: 0, maidens: 0, out: 0},
          {playerNumber: 11,playerName: "Player 11", runsScored : 0, fours: 0, sixes: 0, ballsFaced: 0, wickets: 0, ballsBowled: 0,runsGiven: 0, maidens: 0, out: 0},
        ]
      },
      {
        name: "",
        score: 0,
        ballsPlayed: 0,
        runRate: 0,
        currentStriker: 0,
        currentNonStriker: 0,
        currentBowler: 0,
        wickets:0,
        preBowler: 0,
        players : [
          {playerNumber: 1,playerName: "Player 1", runsScored : 0, fours: 0, sixes: 0, ballsFaced: 0, wickets: 0, ballsBowled: 0,runsGiven: 0, maidens: 0, out: 0},
          {playerNumber: 2,playerName: "Player 2", runsScored : 0, fours: 0, sixes: 0, ballsFaced: 0, wickets: 0, ballsBowled: 0,runsGiven: 0, maidens: 0, out: 0},
          {playerNumber: 3,playerName: "Player 3", runsScored : 0, fours: 0, sixes: 0, ballsFaced: 0, wickets: 0, ballsBowled: 0,runsGiven: 0, maidens: 0, out: 0},
          {playerNumber: 4,playerName: "Player 4", runsScored : 0, fours: 0, sixes: 0, ballsFaced: 0, wickets: 0, ballsBowled: 0,runsGiven: 0, maidens: 0, out: 0},
          {playerNumber: 5,playerName: "Player 5", runsScored : 0, fours: 0, sixes: 0, ballsFaced: 0, wickets: 0, ballsBowled: 0,runsGiven: 0, maidens: 0, out: 0},
          {playerNumber: 6,playerName: "Player 6", runsScored : 0, fours: 0, sixes: 0, ballsFaced: 0, wickets: 0, ballsBowled: 0,runsGiven: 0, maidens: 0, out: 0},
          {playerNumber: 7,playerName: "Player 7", runsScored : 0, fours: 0, sixes: 0, ballsFaced: 0, wickets: 0, ballsBowled: 0,runsGiven: 0, maidens: 0, out: 0},
          {playerNumber: 8,playerName: "Player 8", runsScored : 0, fours: 0, sixes: 0, ballsFaced: 0, wickets: 0, ballsBowled: 0,runsGiven: 0, maidens: 0, out: 0},
          {playerNumber: 9,playerName: "Player 9", runsScored : 0, fours: 0, sixes: 0, ballsFaced: 0, wickets: 0, ballsBowled: 0,runsGiven: 0, maidens: 0, out: 0},
          {playerNumber: 10,playerName: "Player 10", runsScored : 0, fours: 0, sixes: 0, ballsFaced: 0, wickets: 0, ballsBowled: 0,runsGiven: 0, maidens: 0, out: 0},
          {playerNumber: 11,playerName: "Player 11", runsScored : 0, fours: 0, sixes: 0, ballsFaced: 0, wickets: 0, ballsBowled: 0,runsGiven: 0, maidens: 0, out: 0},
        ]
      }
    ]
    
  }
}

 function ScoreCard(props : typeof mapDispatchToProps) {  
  let history = useHistory();
  const classes = useStyles();  
  let [match, setMatchState] = useState(TeamDetails.newmatch) 
  let [startOver, setstartOver] = useState(false)   
  let [buttonState, setButton] = useState(false)
  const [pagevariable,setState] = useState({    
    loading: false,
    currentOvers : 0.0, 
    
  })
  const dispatch = useDispatch()
  let appState = appStore.getState(); 
  if(TeamDetails.newmatch.id === '' ||  TeamDetails.newmatch.id === 'undefined')
  {    
    TeamDetails.newmatch = appState.reducermethod.TeamDetails;        
  }  
let FirstStrikeRate = (match.team[match.currentBatting].players[match.team[match.currentBatting].currentStriker].runsScored / match.team[match.currentBatting].players[match.team[match.currentBatting].currentStriker].ballsFaced * 100).toFixed(2);
if(isNaN(Number(FirstStrikeRate)))
{
  FirstStrikeRate = "0";
}
else
{
  FirstStrikeRate = (match.team[match.currentBatting].players[match.team[match.currentBatting].currentStriker].runsScored / match.team[match.currentBatting].players[match.team[match.currentBatting].currentStriker].ballsFaced * 100).toFixed(2);
}

let SecondStrikeRate = (match.team[match.currentBatting].players[match.team[match.currentBatting].currentNonStriker].runsScored / match.team[match.currentBatting].players[match.team[match.currentBatting].currentNonStriker].ballsFaced * 100).toFixed(2);
if(isNaN(Number(SecondStrikeRate)))
{
  SecondStrikeRate = "0";
}
else
{
  SecondStrikeRate = (match.team[match.currentBatting].players[match.team[match.currentBatting].currentNonStriker].runsScored / match.team[match.currentBatting].players[match.team[match.currentBatting].currentNonStriker].ballsFaced * 100).toFixed(2);
}

let RunRate = ((match.team[match.currentBatting].score /match.team[match.currentBatting].ballsPlayed)*6).toFixed(2);
if(isNaN(Number(RunRate)))
{
  RunRate = "0";
}
else
{
  RunRate = ((match.team[match.currentBatting].score /match.team[match.currentBatting].ballsPlayed)*6).toFixed(2);
}

  const balling = (num: number) => {    
   debugger;
   var runForteam= 0;
   var addToBatsman = 1;
   var incBall = 1;
   var wicket = 0;
   var extra; 
   if(num === 8 || num === 9)
   {
     runForteam = 1;
     extra =  num;
     num = 0;
     incBall = 0;   
   } 
   else if(num === 7)
   {
      addToBatsman = 0;
      wicket = 1;
      extra =  num;
      num = 0;
   }
    if(wicket){
      incBall =1;
    }   
    var temp = -1; 
   
    var run  = num ;
   
    if(wicket === 0){
      match.team[match.currentBatting].score = match.team[match.currentBatting].score + run + runForteam;
    }    
    
    if(wicket ===0 && addToBatsman){
      match.team[match.currentBatting].players[match.team[match.currentBatting].currentStriker].runsScored = match.team[match.currentBatting].players[match.team[match.currentBatting].currentStriker].runsScored + run;
    }    
   
    if(incBall){
      match.team[match.currentBatting].ballsPlayed = match.team[match.currentBatting].ballsPlayed + 1;    
      match.team[match.currentBatting].players[match.team[match.currentBatting].currentStriker].ballsFaced = match.team[match.currentBatting].players[match.team[match.currentBatting].currentStriker].ballsFaced + 1;
    }
    if (wicket===0 &&  addToBatsman &&  run === 4) {
      match.team[match.currentBatting].players[match.team[match.currentBatting].currentStriker].fours = match.team[match.currentBatting].players[match.team[match.currentBatting].currentStriker].fours + 1;
    }
    if (wicket === 0 && addToBatsman &&  run === 6) {
      match.team[match.currentBatting].players[match.team[match.currentBatting].currentStriker].sixes = match.team[match.currentBatting].players[match.team[match.currentBatting].currentStriker].sixes + 1;
    }
    if(incBall){
      match.team[match.currentBowling].players[match.team[match.currentBowling].currentBowler].ballsBowled = match.team[match.currentBowling].players[match.team[match.currentBowling].currentBowler].ballsBowled + 1;
    }
    if(extra === 7 || extra === 8){
      match.team[match.currentBowling].players[match.team[match.currentBowling].currentBowler].runsGiven = match.team[match.currentBowling].players[match.team[match.currentBowling].currentBowler].runsGiven + run  ;
    }
    if (wicket === 0 && (run === 1 || run === 3)) {
      temp = match.team[match.currentBatting].currentStriker;
      match.team[match.currentBatting].currentStriker = match.team[match.currentBatting].currentNonStriker;
      match.team[match.currentBatting].currentNonStriker = temp;
    }
    //TODO
    if(wicket){     
      match.team[match.currentBatting].wickets = match.team[match.currentBatting].wickets +1;
      
      match.team[match.currentBowling].players[match.team[match.currentBowling].currentBowler].wickets = match.team[match.currentBowling].players[match.team[match.currentBowling].currentBowler].wickets + 1;
      
      match.team[match.currentBatting].players[match.team[match.currentBatting].currentStriker].out = 1;
     
      for(var j = 0; j< 11; j++){
        if(match.team[match.currentBatting].players[j].out !== 1 && j!== match.team[match.currentBatting].currentNonStriker){
          match.team[match.currentBatting].currentStriker = j;         
          break;
        }
      }
    } 
    //TODO   
    if (incBall && match.team[match.currentBatting].ballsPlayed % 6 === 0) {
      temp = match.team[match.currentBatting].currentStriker;
      match.team[match.currentBatting].currentStriker = match.team[match.currentBatting].currentNonStriker;
      match.team[match.currentBatting].currentNonStriker = temp;      
    }
    setMatchState((prevState : any) => {
      return { ...prevState,          
        match: match}        
    });
  };

function startover(e : SyntheticEvent) {

setTimeout(() => {
       setButton(true)
}, 500);    
var timesRun = 0;
   
var interval =  setInterval(function(){ 
//7 for WK //8 for wide // 9 for Noball
var items = [0,1,2,3,4,5,6,7,8,9];
var item = items[Math.floor(Math.random() * items.length)];
balling(Number(item));
if(item !== 8 && item !== 9)
{
  timesRun += 1;
}  
if(timesRun === 6){
    clearInterval(interval);   
     setTimeout(() => {     
      setstartOver(true);
   }, 500);
  }  
  props.StartOverWatcher(
    {newmatch : match}   
 );
}, 3000);
}

  useEffect(() => {
    if(startOver)
    {
    const timer = setTimeout(() => {     
      axios.put("http://localhost:3001/db/" + match.id, match)
      .then(res => {     
          setMatchState((prevState : any) => {
          return { ...prevState,          
            match: res.data
          }        
          });
      }).catch(err => {
      console.log("Not Updated");
      });
    }, 2000);
    return () => clearTimeout(timer);
  }
  }, [startOver]);

  useEffect(() => {
    if(startOver)
    {
    const timer = setTimeout(() => {
      setButton(false); 
      console.log(" new useeffect " + new Date()+ " Over State " +  buttonState);            
    }, 500);
    return () => clearTimeout(timer);
  }
  }, [startOver]);

  function openBatsman ()  {    
    history.push('/Batsman', match);
  };
  function openBowler ()  {   
    history.push('/Bowler', match);
  };
  
   return (     
      <div>       
        <div className="main">
          <div className="row ">
            <div className="col-lg-3 col-sm-2 col-xs-1" />
            <div className="col-lg-6 col-sm-8 col-xs-10 scorecard">
              <div className="row mainscore ">
                <div className="col-lg-12 col-sm-12  col-xs-12 nopadding">
                  <div className="row mainscore-score ">
                    {
                     match ? match.team[match.currentBatting].name : "NA"
                    }  &nbsp;
                    {
                      match ? match.team[match.currentBatting].score : "NA"
                    }/ 
                    {
                      match ? match.team[match.currentBatting].wickets : "NA"
                    }   <span> ({
                      match ? Math.floor(match.team[match.currentBatting].ballsPlayed /6 ): "NA"
                    }.{
                      match ? match.team[match.currentBatting].ballsPlayed %6 : "NA"
                    }) <br className="visible-xs"/>Rr: {match ? RunRate : '' } </span>
                    
                                     
                    <Button
         variant="contained"
         color="primary"
         className={classes.button}
         onClick={startover}  
          disabled = {buttonState}
          > Start Over
       </Button>  
                  </div>
                  {/* <div className="row innings">Match Id: {match? match.id : ""}</div> */}
                  <div className="row innings">{match? match.status : ""}</div>
                </div>
              </div>
              <div className="row batsman ">
                <div className="col-lg-6 col-sm-6   col-xs-6 nopadding">BATSMAN &nbsp; 

                 </div>
                <div className="col-lg-1 col-sm-1  col-xs-1 nopadding">R</div>
                <div className="col-lg-1 col-sm-1  col-xs-1 nopadding">B</div>
                <div className="col-lg-1 col-sm-1  col-xs-1 nopadding">4</div>
                <div className="col-lg-1 col-sm-1  col-xs-1 nopadding">6</div>
                <div className="col-lg-2 col-sm-2  col-xs-2 nopadding">sr</div>
              </div>
              <div className="row striker onlyTopPadding">
                <div className="col-lg-6 col-sm-6  col-xs-6 onlyTopPadding">{match? match.team[match.currentBatting].players[match.team[match.currentBatting].currentStriker].playerName: ""}* &nbsp; 

                </div>
                <div className="col-lg-1 col-sm-1  col-xs-1 onlyTopPadding">{match? match.team[match.currentBatting].players[match.team[match.currentBatting].currentStriker].runsScored: ""}</div>
                <div className="col-lg-1 col-sm-1  col-xs-1 onlyTopPadding">{match? match.team[match.currentBatting].players[match.team[match.currentBatting].currentStriker].ballsFaced: ""}</div>
                <div className="col-lg-1 col-sm-1  col-xs-1 onlyTopPadding">{match? match.team[match.currentBatting].players[match.team[match.currentBatting].currentStriker].fours: ""}</div>
                <div className="col-lg-1 col-sm-1  col-xs-1 onlyTopPadding">{match? match.team[match.currentBatting].players[match.team[match.currentBatting].currentStriker].sixes: ""}</div>
                <div className="col-lg-2 col-sm-2  col-xs-2 onlyTopPadding">{match? FirstStrikeRate : "" }</div>
              </div>
              <div className="row striker onlyTopPadding">
                <div className="col-lg-6 col-sm-6  col-xs-6 onlyTopPadding">{match? match.team[match.currentBatting].players[match.team[match.currentBatting].currentNonStriker].playerName: ""}</div>
                <div className="col-lg-1 col-sm-1  col-xs-1 onlyTopPadding">{match? match.team[match.currentBatting].players[match.team[match.currentBatting].currentNonStriker].runsScored: ""}</div>
                <div className="col-lg-1 col-sm-1  col-xs-1 onlyTopPadding">{match? match.team[match.currentBatting].players[match.team[match.currentBatting].currentNonStriker].ballsFaced: ""}</div>
                <div className="col-lg-1 col-sm-1  col-xs-1 onlyTopPadding">{match? match.team[match.currentBatting].players[match.team[match.currentBatting].currentNonStriker].fours: ""}</div>
                <div className="col-lg-1 col-sm-1  col-xs-1 onlyTopPadding">{match? match.team[match.currentBatting].players[match.team[match.currentBatting].currentNonStriker].sixes: ""}</div>
                <div className="col-lg-2 col-sm-2  col-xs-2 onlyTopPadding">{match? SecondStrikeRate : "" }</div>
              </div>
              <div className="row bowler">
                <div className="col-lg-6 col-sm-6  col-xs-6 onlyTopPadding">BOWLER &nbsp;
                </div>
                <div className="col-lg-1 col-sm-1  col-xs-1 onlyTopPadding">O</div>
                <div className="col-lg-1 col-sm-1  col-xs-1 onlyTopPadding">M</div>
                <div className="col-lg-1 col-sm-1  col-xs-1 onlyTopPadding">R</div>
                <div className="col-lg-1 col-sm-1  col-xs-1 onlyTopPadding">W</div>
                <div className="col-lg-2 col-sm-2  col-xs-2 onlyTopPadding">Eco</div>
              </div>
              <div className="row bowlerstats ">
                <div className="col-lg-6 col-sm-6  col-xs-6 onlyTopPadding">{match? match.team[match.currentBowling].players[match.team[match.currentBowling].currentBowler].playerName: ""}</div>
                <div className="col-lg-1 col-sm-1  col-xs-1 onlyTopPadding">{match? Math.floor(match.team[match.currentBowling].players[match.team[match.currentBowling].currentBowler].ballsBowled / 6): ""}.{match?match.team[match.currentBowling].players[match.team[match.currentBowling].currentBowler].ballsBowled % 6: ""}</div>
                <div className="col-lg-1 col-sm-1  col-xs-1 onlyTopPadding">{match? match.team[match.currentBowling].players[match.team[match.currentBowling].currentBowler].maidens: ""}</div>
                <div className="col-lg-1 col-sm-1  col-xs-1 onlyTopPadding">{match? match.team[match.currentBowling].players[match.team[match.currentBowling].currentBowler].runsGiven: ""}</div>
                <div className="col-lg-1 col-sm-1  col-xs-1 onlyTopPadding">{match? match.team[match.currentBowling].players[match.team[match.currentBowling].currentBowler].wickets: ""}</div>
                <div className="col-lg-2 col-sm-2  col-xs-2 onlyTopPadding">0</div>
              </div>              
              <div className="row ">         
             
               <Button
         variant="contained"
         color="primary"
         className={classes.button}        
         onClick={openBatsman}
          > Batsman
       </Button>              
                   
       <Button
         variant="contained"
         color="primary"
         className={classes.button}        
         onClick={openBowler}
          > Bowler
       </Button>   
         </div>              
            </div>
            <div className="col-lg-3 col-sm-2 col-xs-1" />
            </div>          
        </div>       
      </div>      
    );
    
  
}
const mapDispatchToProps = {
  StartOverWatcher : (formparams : ITeamDetails) => ({ type: 'START_OVER', payload: formparams.newmatch })
}

const mapStateToProps = (state: RootState) => {
  
 return {    
    newmatch : state
 };
};
export default connect(mapStateToProps,mapDispatchToProps)(ScoreCard);

