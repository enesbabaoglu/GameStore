import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'game-list',
  templateUrl: './game-list.component.html',
  styleUrls: ['./game-list.component.css']
})
export class GameListComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
getGames(){
    return [
      {Name:"Call of Duty",Owner:"Enes BABAOĞLU",Bundle:"callofduty.com"},
      {Name:"Call of Duty",Owner:"Enes BABAOĞLU",Bundle:"callofduty.com"},

    ]
}
}
