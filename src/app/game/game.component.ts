import { Component, OnInit } from '@angular/core';
import { interval } from 'rxjs';
import { map } from 'rxjs/operators'

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent implements OnInit {
  score = 0;
  firstNum: number;
  secondNum: number;
  answer: number;
  rand: number;
  result = [];
  final: number;
  isOn = false;
  time: number;
  secs = 0;
  milli = 0;
  highScore = 0;

  increment(){
    const secondsCounter = interval(1000);
    secondsCounter.subscribe(t=>this.time = t);
  }
    

  createRandom(){
    this.firstNum = Math.floor(Math.random() * 20) + 1;
    this.secondNum = Math.floor(Math.random() * 20) + 1;
    this.answer = this.firstNum + this.secondNum;
    this.rand = Math.floor(Math.random() * this.answer) + 5;
    this.result = [this.answer, this.rand];
    this.final = this.result[Math.round(Math.random())];
  }

  onAttempt(){
    if (this.final == this.answer){
       this.score++;  
       this.createRandom();
    }
    else{
      this.reset();
    }
    if (this.score > this.highScore){
      this.highScore = this.score;
    }
  }
  onAttempt2(){
    if (this.final != this.answer){
      this.score++;
      this.createRandom();
    }
    else{
      this.reset();
    }
    if (this.score > this.highScore){
      this.highScore = this.score;
    }
  }

  reset(){
    this.createRandom();
    this.score = 0;
  }

  constructor() { 
    this.createRandom();
    this.increment();
  }


  ngOnInit() {
  }
 

}
