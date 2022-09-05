import { Component, OnInit } from '@angular/core';
import {Game} from "../game";
import {GameService} from "../game-service";

@Component({
  selector: 'game-list',
  templateUrl: './game-list.component.html',
  styleUrls: ['./game-list.component.css']
})
export class GameListComponent implements OnInit {
games:Game[]=this.gameService.getAll();
searchText :string="";

  constructor(private gameService:GameService) {
    this.games=this.gameService.getAll();
  }

  ngOnInit(): void {
    this.getGames();
  }
  getGames(){
      this.games= this.gameService.getAll();
  }
  onSearchChange(e:any): void {
    this.games= this.gameService.getAll().filter(x=>x.name.toLowerCase().includes(this.searchText));
  }
}
