import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { GameListComponent } from './game-list/game-list.component';
import { NavbarComponent } from './navbar/navbar.component';

import {MenuModule} from "primeng/menu";
import {MenubarModule} from "primeng/menubar";
import {CardModule} from "primeng/card";
import {ButtonModule} from "primeng/button";
import {MessageModule} from "primeng/message";
import { GameCreateComponent } from './game-create/game-create.component';
import {DialogModule} from "primeng/dialog";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {RouterModule} from "@angular/router";
import {FileUploadModule} from "primeng/fileupload";
import {HttpClientModule} from "@angular/common/http";


@NgModule({
  declarations: [
    AppComponent,
    GameListComponent,
    NavbarComponent,
    GameCreateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MenuModule,
    MenubarModule,
    CardModule,
    ButtonModule,
    MessageModule,
    DialogModule,
    ReactiveFormsModule,
    FormsModule,
    RouterModule.forRoot([
      {path: 'game-create', component: GameCreateComponent},
    ]),
    FileUploadModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
