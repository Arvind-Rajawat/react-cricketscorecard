import React, { useState,useEffect } from 'react';
import "./Players.css";
import { useHistory } from "react-router-dom";

export default function Batsman (props: any) {       
    const [match, setState] = useState(props.location.state)
    const [BattingDetail, SetBattingDetails] = useState({
        firstbatting : null,
        firstBowling: null,
        secondBatting: null,
        secondBowling: null
    })
    
    let history = useHistory();    
    console.log("match" + match);
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
        <div className="row batting-one">
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
                match.team[0].players.map((player:any , id:any) => {
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
        <div className="row batting-two">
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
                match.team[1].players.map((player:any , id:any) => {
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

