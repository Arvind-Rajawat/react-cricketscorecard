import React, { useState,useEffect } from 'react';
import "./Players.css";
import { useHistory } from "react-router-dom";

export default function Bowler (props: any) {       
    const [match, setState] = useState(props.location.state)
    const [BattingDetail, SetBattingDetails] = useState({      
        firstBowling: 0,      
        secondBowling: 0
    })   
    let history = useHistory();    
    console.log("match" + match);
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
        <div className="row bowling-one"> 
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
                 match.team[BattingDetail.firstBowling].players.filter((player:any, id:any) => {
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
        <div className="row bowling-two">
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
                match.team[BattingDetail.secondBowling].players.filter((player:any, id:any) => {
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

