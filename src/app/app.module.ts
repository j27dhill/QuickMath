import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';


import { AppComponent } from './app.component';
import { GameComponent } from './game/game.component';
import { TitlePageComponent } from './title-page/title-page.component';

const appRoutes: Routes = [
  { path: '', component: TitlePageComponent},
  { path: 'play', component: GameComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    GameComponent,
    TitlePageComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    NgbModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
