import React, { useState,useEffect } from 'react';
import "./Players.css";
import { useHistory } from "react-router-dom";
import ITeamDetails from './Interface/index';
import  appStore  from './configureStore';
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

export default function Bowler (props: ITeamDetails) {       
    const [match, setState] = useState(TeamDetails.newmatch)
    const [BattingDetail, SetBattingDetails] = useState({      
        firstBowling: 0,      
        secondBowling: 0
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
        console.log("first batting, ", firstBattin);
        if(firstBattin === 0){
            firstBowlin = 1;
            secondBattin = 1;
            secondBowlin = 0;
        }else{            
            firstBowlin = 0;
            secondBattin = 0;
            secondBowlin = 1;
        }       
        BattingDetail.firstBowling = firstBowlin;       
        BattingDetail.secondBowling = secondBowlin;

        return (
        <div>
            <div className="row  nopadding">
    <div className="col-lg-1 col-sm-1 col-xs-1 nopadding"></div>
    <div className="col-lg-10 col-sm-10 col-xs-10 stats nopadding">        
        <div className={firstBowlin === 1 ? '' : 'hidden'}> 
        <div className="col-lg-12 col-sm-12 col-xs-12 heading-stats white">First Inning's Bowling Chart</div>       
            <div className="col-lg-12 col-sm-12 col-xs-12 heading-stats">
            <div className="row battings-stats">
                    <div className="col-xs-2">Name</div>
                    <div className="col-xs-2">R</div>
                    <div className="col-xs-2">M</div>
                    <div className="col-xs-2">O</div>
                    <div className="col-xs-2">W</div>
                    <div className="col-xs-2">SR</div>
                </div></div>
            <div className="col-lg-12 col-sm-12 col-xs-12 peoplestats">
            {
                 match.team[BattingDetail.firstBowling].players.filter((player: Player, id: number) => {
                    if(player.ballsBowled > 0){
                        return true;
                    }else{
                        return false;
                    }
                }).map((player:any , id:any) => {
                    return <div key={id}><div className="col-xs-2">{player.playerName}</div>
                    <div className="col-xs-2">{Math.floor(player.ballsBowled/ 6)}:{player.ballsBowled%6} </div>
                    <div className="col-xs-2">{player.maidens}</div>
                    <div className="col-xs-2">{player.runsGiven}</div>
                    <div className="col-xs-2">{player.wickets}</div>
                    <div className="col-xs-2">0</div>
                    </div>
                })
            }            
            </div>
        </div>       
        <div className={secondBowlin === 0 ? 'hidden' : ''}   >
        <div className="col-lg-12 col-sm-12 col-xs-12 heading-stats white">Second Inning's Bowling Chart</div>   
            <div className="col-lg-12 col-sm-12 col-xs-12 heading-stats">
            <div className="row battings-stats">
                    <div className="col-xs-2">Name</div>
                    <div className="col-xs-2">B</div>
                    <div className="col-xs-2">M</div>
                    <div className="col-xs-2">O</div>
                    <div className="col-xs-2">W</div>
                    <div className="col-xs-2">E</div>
                </div></div>
            <div className="col-lg-12 col-sm-12 col-xs-12 peoplestats">
            <div className="row battings-stats">
            {
                match.team[BattingDetail.secondBowling].players.filter((player:Player, id: number) => {
                    if(player.ballsBowled > 0){
                        return true;
                    }else{
                        return false;
                    }
                }).map((player:any , id:any) => {
                    return <div key={id}><div className="col-xs-2">{player.playerName}</div>
                    <div className="col-xs-2">{Math.floor(player.ballsBowled/ 6)}:{player.ballsBowled%6} </div>
                    <div className="col-xs-2">{player.maidens}</div>
                    <div className="col-xs-2">{player.runsGiven}</div>
                    <div className="col-xs-2">{player.wickets}</div>
                    <div className="col-xs-2">0</div>
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

