import React, {useState,useEffect, SyntheticEvent} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Button, TextField,withWidth } from '@material-ui/core';
import ITeamDetails from './Interface/index';
import  {TeamDetailsWatcher}  from './actions';
import { bindActionCreators, AnyAction, ActionCreatorsMapObject } from 'redux';
import { connect } from "react-redux";
import  "./App.css";
import axios from 'axios';
import { useHistory } from "react-router-dom";
import  appStore  from './configureStore';
import  { RootState }  from './reducers';
import {useDispatch} from 'react-redux';

const useStyles = makeStyles(theme => ({ 
  textField: {    
      withWidth : "100%",
      textAlign : "center",
      padding : "1rem",
      margin:"0px 1rem 1rem 0px"     
       
  },
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

 function Teams(props : typeof mapDispatchToProps) {
 
  const classes = useStyles();
  const [propsvalues, setState] = useState(TeamDetails)
  const[loading,SetloadingState] = useState(false) 
  const[btnState,SetbtnState] = useState(false)  
  const dispatch = useDispatch()
  let history = useHistory();

  let appState =  appStore.getState(); 


  function startMatch(event : SyntheticEvent)
   { 
   
     event.preventDefault();
     setAllFields() ;
    props.TeamDetailsWatcher(
        {newmatch : propsvalues.newmatch}        
     
    );     
    SetbtnState(true);
  }
  if(appState !== null && appState.reducermethod.redirect)
  {   
    history.push('/ScoreCard', propsvalues.newmatch); 
  }
  
 function setAllFields() { 
       
        var newmatch = propsvalues.newmatch;
        newmatch.id = propsvalues.newmatch.id;        
        newmatch.team[0].name =((document.getElementById("team1") as HTMLInputElement ).value);
        newmatch.team[1].name = ((document.getElementById("team2") as HTMLInputElement).value);
        newmatch.team[0].players[0].playerName = ((document.getElementById("1") as HTMLInputElement).value);
        newmatch.team[0].players[1].playerName = ((document.getElementById("2") as HTMLInputElement).value);
        newmatch.team[0].players[2].playerName = ((document.getElementById("3") as HTMLInputElement).value);
        newmatch.team[0].players[3].playerName = ((document.getElementById("4") as HTMLInputElement).value);
        newmatch.team[0].players[4].playerName = ((document.getElementById("5") as HTMLInputElement).value);
        newmatch.team[0].players[5].playerName = ((document.getElementById("6") as HTMLInputElement).value);
        newmatch.team[0].players[6].playerName = ((document.getElementById("7") as HTMLInputElement).value);
        newmatch.team[0].players[7].playerName = ((document.getElementById("8") as HTMLInputElement).value);
        newmatch.team[0].players[8].playerName = ((document.getElementById("9") as HTMLInputElement).value);
        newmatch.team[0].players[9].playerName = ((document.getElementById("10") as HTMLInputElement).value);
        newmatch.team[0].players[10].playerName =((document.getElementById("11") as HTMLInputElement).value);
        newmatch.team[1].players[0].playerName = ((document.getElementById("12") as HTMLInputElement).value);
        newmatch.team[1].players[1].playerName = ((document.getElementById("13") as HTMLInputElement).value);
        newmatch.team[1].players[2].playerName = ((document.getElementById("14") as HTMLInputElement).value);
        newmatch.team[1].players[3].playerName = ((document.getElementById("15") as HTMLInputElement).value);
        newmatch.team[1].players[4].playerName = ((document.getElementById("16") as HTMLInputElement).value);
        newmatch.team[1].players[5].playerName = ((document.getElementById("17") as HTMLInputElement).value);
        newmatch.team[1].players[6].playerName = ((document.getElementById("18") as HTMLInputElement).value);
        newmatch.team[1].players[7].playerName = ((document.getElementById("19") as HTMLInputElement).value);
        newmatch.team[1].players[8].playerName = ((document.getElementById("20") as HTMLInputElement).value);
        newmatch.team[1].players[9].playerName = ((document.getElementById("21") as HTMLInputElement).value);
        newmatch.team[1].players[10].playerName = ((document.getElementById("22") as HTMLInputElement).value);
        newmatch.maxBalls = ((document.getElementById("overs") as HTMLInputElement).value , 10) * 6;
        console.log(" In Starting Max Balls ", newmatch.maxBalls);
        newmatch.toss = parseInt((document.getElementById("toss") as HTMLInputElement).value);
        newmatch.currentBatting = newmatch.toss;
        newmatch.team[0].wickets = 0;
        newmatch.team[1].wickets = 0;
        newmatch.team[0].currentStriker = 0;
        newmatch.team[0].currentNonStriker = 1;
        newmatch.team[0].currentBowler = 10;
        newmatch.team[1].currentBowler = 10;
        newmatch.team[1].currentStriker = 0;
        newmatch.team[1].currentNonStriker = 1;
        newmatch.team[0].preBowler = -1;
        newmatch.team[1].preBowler = -1;

        if(newmatch.toss === 0){
            newmatch.status = "First Team choice to batting first!"
        }else{
            newmatch.status = "Second Team choice to batting first!"
        }
        if(newmatch.currentBatting === 1){
            newmatch.currentBowling = 0;
        }else
        newmatch.currentBowling = 1;       
      }
  return (       
    <div> 
       {/* <div className="row">
       {props.newmatch.Toss}      
    </div>       */}
    <div className="row mainTeamDetails" >
    <div className="row">
        <div className="col-lg-12 col-xs-12  ">
            <div className="matchdetails">Today International Match</div>
        </div>
    </div>
    <div className="row">
        <div className="col-lg-6 col-sm-6 col-xs-12  teamDetailsCol ">
        <div className="teamdetails">
            <div className="row">
                <div className="col-lg-12 col-xs-12  teamname">FIRST TEAM</div>
                <div className="col-lg-12 col-xs-12   ">
                <TextField  className={classes.textField} id="team1"  placeholder = "Specify Team Name"                     
                 />
                </div>
            </div>
            <div className="row players">
            <div className="col-lg-12 col-xs-12  teamname">PLAYERS </div>
                <div className="col-lg-12 col-xs-12  player">
                <TextField  className={classes.textField}  id="1" placeholder="enter player 1 name" />
                </div>
                <div className="col-lg-12 col-xs-12  player">
                    <TextField  className={classes.textField}  id="2" placeholder="enter player 2 name" />
                </div>
                <div className="col-lg-12 col-xs-12  player">
                <TextField  className={classes.textField}  id="3" placeholder="enter player 3 name" />
                </div>
                <div className="col-lg-12 col-xs-12  player">
                <TextField  className={classes.textField} id="4" placeholder="enter player 4 name" />
                </div>
                <div className="col-lg-12 col-xs-12  player">
                <TextField  className={classes.textField}  id="5" placeholder="enter player 5 name" />
                </div>
                <div className="col-lg-12 col-xs-12  player">
                <TextField  className={classes.textField}  id="6" placeholder="enter player 6 name" />
                </div>
                <div className="col-lg-12 col-xs-12  player">
                <TextField  className={classes.textField}  id="7" placeholder="enter player 7 name" />
                </div>
                <div className="col-lg-12 col-xs-12  player">
                <TextField  className={classes.textField} id="8" placeholder="enter player 8 name" />
                </div>
                <div className="col-lg-12 col-xs-12  player">
                <TextField  className={classes.textField} id="9" placeholder="enter player 9 name" />
                </div>
                <div className="col-lg-12 col-xs-12  player">
                <TextField  className={classes.textField}  id="10" placeholder="enter player 10 name" />
                </div>
                <div className="col-lg-12 col-xs-12  player">
                <TextField  className={classes.textField}  id="11" placeholder="enter player 11 name" />
                </div>
            </div>
        </div></div>

        <div className="col-lg-6 col-sm-6  col-xs-12  teamDetailsCol">
        <div className="teamdetails">
            <div className="row">
                <div className="col-lg-12 col-xs-12  teamname">SECOND TEAM</div>
                <div className="col-lg-12 col-xs-12   ">
                <TextField  className={classes.textField} id="team2"  placeholder = "Specify Team Name"                     
                 />
                </div>
            </div>
            <div className="row players">
              <div className="col-lg-12 col-xs-12  teamname">PLAYERS   </div>
                <div className="col-lg-12 col-xs-12  player">
                <TextField  className={classes.textField}  id="12" placeholder="enter player 1 name" />
                </div>
                <div className="col-lg-12 col-xs-12  player">
                <TextField  className={classes.textField}  id="13" placeholder="enter player 2 name" />
                </div>
                <div className="col-lg-12 col-xs-12  player">
                <TextField  className={classes.textField}  id="14" placeholder="enter player 3 name" />
                </div>
                <div className="col-lg-12 col-xs-12  player">
                <TextField  className={classes.textField}  id="15" placeholder="enter player 4 name" />
                </div>
                <div className="col-lg-12 col-xs-12  player">
                <TextField  className={classes.textField}  id="16" placeholder="enter player 5 name" />
                </div>
                <div className="col-lg-12 col-xs-12  player">
                <TextField  className={classes.textField}  id="17" placeholder="enter player 6 name" />
                </div>
                <div className="col-lg-12 col-xs-12  player">
                <TextField  className={classes.textField}  id="18" placeholder="enter player 7 name" />
                </div>
                <div className="col-lg-12 col-xs-12  player">
                <TextField  className={classes.textField}  id="19" placeholder="enter player 8 name" />
                </div>
                <div className="col-lg-12 col-xs-12  player">
                <TextField  className={classes.textField}  id="20" placeholder="enter player 9 name" />
                </div>
                <div className="col-lg-12 col-xs-12  player">
                <TextField  className={classes.textField}  id="21" placeholder="enter player 10 name" />
                </div>
                <div className="col-lg-12 col-xs-12  player">
                <TextField  className={classes.textField}  id="22" placeholder="enter player 11 name" />
                </div>
            </div>
            </div>
        </div>
    </div>
    <div className="row overs_element">
        <div className="col-lg-12 col-xs-12  teamname overs_heading">Overs</div>
        <div className="col-lg-12 col-xs-12  ">
        <TextField  className={classes.textField} id="overs" placeholder="Enter the overs of the match" />
        </div>
    </div>
    <div className="row overs_element">
        <div className="col-lg-12 col-xs-12  teamname toss_element">Toss ? Enter 0 for First Team and 1 for Second Team</div>
        <div className="col-lg-12 col-xs-12  ">
        <TextField  className={classes.textField}  id="toss" placeholder="toss" />
        </div>
    </div>
    <div className="row">
        <div className="col-lg-12 col-xs-12  startMatchButtonElement">           
         <Button
         variant="contained"
         color="primary"
         className={classes.button}
         onClick={startMatch}
          >      
         Start the match
        </Button>
        </div>       
    </div>
   
</div>
      </div>
  );
  }
  const mapDispatchToProps = {
    TeamDetailsWatcher : (formparams : ITeamDetails) => ({ type: 'TEAM_DETAILS', payload: formparams.newmatch })
  }
  
  const mapStateToProps = (state: RootState) => { 
     
   return {      
      newmatch : state
   };
  
 };
export default connect(mapStateToProps,mapDispatchToProps)(Teams);