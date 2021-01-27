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
  inputId = 'input-';
  outputId = 'output-';

  constructor() { }

  ngOnInit(): void {
    this.inputId = 'input-' + this.key;
    this.outputId = 'output-' + this.key;
  }

  sendInput() {
    this.inputEnter.emit(this.inputValue);
  }
}
