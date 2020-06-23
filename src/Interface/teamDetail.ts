import Player from './player';

export default interface  TeamDetail {
name: string,
score: number,
ballsPlayed: number,
runRate: number,
currentStriker: number,
currentNonStriker: number,
currentBowler: number,
players : Player[]
wickets:number
preBowler: number

}
  