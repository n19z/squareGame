import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-field',
  templateUrl: './field.component.html',
  styleUrls: ['./field.component.sass']
})
export class FieldComponent implements OnInit {
  arr: Array<number> = []

  constructor() { 
    for (let i = 0; i < 400; i++) {
      this.arr[i] = i;
    }
  }

  ngOnInit(): void {
  }

}
