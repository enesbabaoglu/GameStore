import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {ActivatedRoute, Router, RouterModule} from "@angular/router";

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

  constructor(  private route: ActivatedRoute,private router: Router ) { }

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
    this.router.navigate(['/']);
  }
}
