import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-problem-two',
  templateUrl: './problem-two.component.html',
  styleUrls: ['./problem-two.component.scss']
})
export class ProblemTwoComponent implements OnInit {

    output: string = '';

  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
  }

  validInput(input: string) {
    this.apiService.problemTwoSolve(input)
    .subscribe((result) => {
      this.output = result.attacks;
    
    }, err => {
      this.output = 'Error: ' + err.response.message;
    });
  }

}