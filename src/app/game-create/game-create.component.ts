import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {ActivatedRoute, Router, RouterModule} from "@angular/router";
import {Game} from "../game";
import {GameService} from "../game-service";

@Component({
  selector: 'game-create',
  templateUrl: './game-create.component.html',
  styleUrls: ['./game-create.component.css']
})
export class GameCreateComponent implements OnInit {

  displayBasic2: boolean = true;
  bundle:any ;
  name:any;
  owner:any;
  form : any;

  constructor(  private route: ActivatedRoute,private router: Router,private gameService: GameService ) { }

  ngOnInit(): void {
    this.form = new FormGroup({
      name: new FormControl(),
      bundle: new FormControl(),
      owner: new FormControl()
    });
    this.displayBasic2=true;

  }
  save():void{
    this.displayBasic2=false;
    let game: Game={
      id:this.gameService.getAll().length+1,
      name:this.form.value.name,
      bundle:this.form.value.bundle,
      owner:this.form.value.owner,
      description:"fsdfdsfsdf"
    }
    this.add(game);

    this.router.navigate(['/']);
  }
  add(game:Game){
    this.gameService.add(game);
  }
}
