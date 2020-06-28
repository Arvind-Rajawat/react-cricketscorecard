import React, { useState,useEffect } from 'react';
import "./Players.css";
import { useHistory } from "react-router-dom";
import  appStore  from './configureStore';
import { Hidden } from '@material-ui/core';
import ITeamDetails from './Interface/index';
import Player from './Interface/player';

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
export default function Batsman (props: ITeamDetails) {       
    const [match, setState] = useState(TeamDetails.newmatch)
    const [BattingDetail, SetBattingDetails] = useState({
        firstbatting : null,
        firstBowling: null,
        secondBatting: null,
        secondBowling: null
    })
    let appState = appStore.getState();    
    if(TeamDetails.newmatch.id === '' ||  TeamDetails.newmatch.id === 'undefined')
      {   
        TeamDetails.newmatch = appState.scoreCardReducer.TeamDetailsScore;
      }     
    let history = useHistory();
        var firstBattin : number;
        var firstBowlin: number;
        var secondBattin: number;
        var secondBowlin: number;
        firstBattin = match.toss;       
        if(firstBattin === 0){
            firstBowlin = 1;
            secondBattin = 1;
            secondBowlin = 0;
        }else{                      
            firstBowlin = 0;
            secondBattin = 0;
            secondBowlin = 1;            
        }
        return (
        <div>
            <div className="row  nopadding">
    <div className="col-lg-1 col-sm-1 col-xs-1 nopadding"></div>
    <div className="col-lg-10 col-sm-10 col-xs-10 stats nopadding">       
        <div className={firstBattin === 0 ? '' : 'hidden'} id = "first">
        <div className="col-lg-12 col-sm-12 col-xs-12 heading-stats white">First Innings</div>
            <div className="col-lg-12 col-sm-12 col-xs-12 heading-stats">
            <div className="row battings-stats">
                    <div className="col-xs-2">Name</div>
                    <div className="col-xs-2">S</div>
                    <div className="col-xs-2">B</div>
                    <div className="col-xs-2">F</div>
                    <div className="col-xs-2">S</div>
                    <div className="col-xs-2">SR</div>
                </div>
            </div>
            <div className="col-lg-12 col-sm-12 col-xs-12 peoplestats">
            <div className="row battings-stats">
            {
                match.team[0].players.map((player: Player , id:any) => {
                    return <div key={id}><div className="col-xs-2">{player.playerName}</div>
                    <div className="col-xs-2">{player.runsScored}</div>
                    <div className="col-xs-2">{player.ballsFaced}</div>
                    <div className="col-xs-2">{player.fours}</div>
                    <div className="col-xs-2">{player.sixes}</div>
                    <div className="col-xs-2">{(player.runsScored / player.ballsFaced * 100).toFixed(2)}</div>
                    </div>
                })
            }
                    
                </div>
            </div>
        </div>        
        <div className={secondBattin === 1 ? 'hidden' : ''} id = "second">
        <div className="col-lg-12 col-sm-12 col-xs-12 heading-stats white">Second Innings</div>
            <div className="col-lg-12 col-sm-12 col-xs-12 heading-stats">
            <div className="row battings-stats">
                    <div className="col-xs-2">Name</div>
                    <div className="col-xs-2">S</div>
                    <div className="col-xs-2">B</div>
                    <div className="col-xs-2">F</div>
                    <div className="col-xs-2">S</div>
                    <div className="col-xs-2">SR</div>
                </div></div>
            <div className="col-lg-12 col-sm-12 col-xs-12 peoplestats">
            <div className="row battings-stats">
            {
                match.team[1].players.map((player:Player , id: number) => {
                    return <div key={id}><div className="col-xs-2">{player.playerName}</div>
                    <div className="col-xs-2">{player.runsScored}</div>
                    <div className="col-xs-2">{player.ballsFaced}</div>
                    <div className="col-xs-2">{player.fours}</div>
                    <div className="col-xs-2">{player.sixes}</div>
                    <div className="col-xs-2">{(player.runsScored / player.ballsFaced * 100).toFixed(2)}</div>
                    </div>
                })
            }
                </div></div>
        </div>        
    </div>
    <div className="col-lg-1 col-sm-1 col-xs-1 nopadding"></div>
</div>
        </div>);
  
}

