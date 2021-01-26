import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-problem-three',
  templateUrl: './problem-three.component.html',
  styleUrls: ['./problem-three.component.scss']
})
export class ProblemThreeComponent implements OnInit {
  output: string = '';

  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
  }

  validInput(input: string) {
    // console.log(input.split('\n'));
    this.apiService.problemThreeSolve(input)
    .subscribe((result) => {
      this.output = result.maximum_occurs;
    }, err => {
      this.output = 'Error: ' + err.response.message;
    });
  }

}
