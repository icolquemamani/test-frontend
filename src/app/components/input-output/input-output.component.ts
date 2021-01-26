import { Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';

@Component({
  selector: 'app-input-output',
  templateUrl: './input-output.component.html',
  styleUrls: ['./input-output.component.scss']
})
export class InputOutputComponent implements OnInit {
  @Input() key= 0;
  @Input() output: string = '';
  @Output() inputEnter = new EventEmitter();

  inputValue: string = '';
  inputId = 'input' + this.key;
  outputId = 'output' + this.key;

  constructor() { }

  ngOnInit(): void {
  }

  sendInput() {
    console.log(this.inputValue);
    this.inputEnter.emit(this.inputValue);
  }
}
