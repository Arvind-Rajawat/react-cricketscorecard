import React, {useState,useEffect} from 'react';
import axios from 'axios';
import { makeStyles } from '@material-ui/core/styles';
import { useHistory } from "react-router-dom";
import "./ScoreCard.css";
import { Button,withWidth } from '@material-ui/core';

const useStyles = makeStyles(theme => ({ 
  button: { 
    withWidth: "33.3%",
    margin: "1rem",
    marginBottom: "1rem !important",
    height: "5rem"
},
}));

export default function ScoreCard(props: any) { 
  
  const classes = useStyles();  
  let [match, setMatchState] = useState(props.location.state)
  let [startOver, setstartOver] = useState(false) 
  let [buttonState, setButton] = useState(false)
  const [pagevariable,setState] = useState({    
    loading: false,
    currentOvers : 0.0, 
    
  }) 
  let history = useHistory(); 
  useEffect(() => {    
  
    axios.get("http://localhost:3001/db/" + match.id
    ).then(res => {
     
      console.log("inside use effect " + new Date());      
       setMatchState((prevState : any) => {
        return { ...prevState,          
          match: res.data}
         
      });     
    }).catch(err => {
      window.alert("wrong match id");
      history.goBack();
    });    
  },[]);

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

function startover() { 
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
}, 2000);
}

  useEffect(() => {
    if(startOver)
    {
    const timer = setTimeout(() => {
      console.log("For update " + JSON.stringify(match));
      axios.put("http://localhost:3001/db/" + match.id, match)
      .then(res => {     
      console.log(" Updated useEffect " + JSON.stringify(res.data));
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
                    }) <br className="visible-xs"/>Rr: {match ? ((match.team[match.currentBatting].score /match.team[match.currentBatting].ballsPlayed)*6).toFixed(2) : '' } </span>
                                     
                    <Button
         variant="contained"
         color="primary"
         className={classes.button}
         onClick={startover}  
          disabled = {buttonState}
          > Start Over
       </Button>  
                  </div>
                  <div className="row innings">Match Id: {match? match.id : ""}</div>
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
                <div className="col-lg-2 col-sm-2  col-xs-2 onlyTopPadding">{match? (match.team[match.currentBatting].players[match.team[match.currentBatting].currentStriker].runsScored / match.team[match.currentBatting].players[match.team[match.currentBatting].currentStriker].ballsFaced * 100).toFixed(2) : "" }</div>
              </div>
              <div className="row striker onlyTopPadding">
                <div className="col-lg-6 col-sm-6  col-xs-6 onlyTopPadding">{match? match.team[match.currentBatting].players[match.team[match.currentBatting].currentNonStriker].playerName: ""}</div>
                <div className="col-lg-1 col-sm-1  col-xs-1 onlyTopPadding">{match? match.team[match.currentBatting].players[match.team[match.currentBatting].currentNonStriker].runsScored: ""}</div>
                <div className="col-lg-1 col-sm-1  col-xs-1 onlyTopPadding">{match? match.team[match.currentBatting].players[match.team[match.currentBatting].currentNonStriker].ballsFaced: ""}</div>
                <div className="col-lg-1 col-sm-1  col-xs-1 onlyTopPadding">{match? match.team[match.currentBatting].players[match.team[match.currentBatting].currentNonStriker].fours: ""}</div>
                <div className="col-lg-1 col-sm-1  col-xs-1 onlyTopPadding">{match? match.team[match.currentBatting].players[match.team[match.currentBatting].currentNonStriker].sixes: ""}</div>
                <div className="col-lg-2 col-sm-2  col-xs-2 onlyTopPadding">{match? (match.team[match.currentBatting].players[match.team[match.currentBatting].currentNonStriker].runsScored / match.team[match.currentBatting].players[match.team[match.currentBatting].currentNonStriker].ballsFaced * 100).toFixed(2) : "" }</div>
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


