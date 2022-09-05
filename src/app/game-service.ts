import { Injectable } from '@angular/core';
import { Game } from './game';

@Injectable({
  providedIn: 'root'
})
export class GameService {

  // new code
  cod: Game =  {id:1, name:"Call of Duty",owner:"Enes BABAOĞLU",bundle:"callofduty.com",description:"fsdfsfsfsf"}

  csgo: Game = {id:1, name:"CS GO",owner:"Enes BABAOĞLU",bundle:"csgos.com",description:"fsdfsfsfsf"}

  games:Game[] = [this.cod, this.csgo];



  constructor() { }

  // new code
  getAll() {
    return this.games;
  }

  add(game: Game){
    this.games.push(game);
  }

}
