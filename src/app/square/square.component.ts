import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-square',
  templateUrl: './square.component.html',
  styleUrls: ['./square.component.sass']
})
export class SquareComponent implements OnInit {
  
  str: string = '';
  x: number = 0;
  y: number = 0;

  getRandomNumber() : number {
     return Math.floor(Math.random() * 6) + 1
  }

  rollDice() {
    this.x = this.getRandomNumber()
    this.y = this.getRandomNumber()
  }

  constructor() {

   }

  ngOnInit(): void {
  }

}
