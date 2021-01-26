import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';


interface WinnerPadel {
  winner: string;
  no_games: number;
}

interface ResultPadel {
  [category: string]: WinnerPadel;
}

@Component({
  selector: 'app-problem-one',
  templateUrl: './problem-one.component.html',
  styleUrls: ['./problem-one.component.scss']
})
export class ProblemOneComponent implements OnInit {
  output: string = '';

  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
  }

  validInput(input: string) {
    // console.log(input.split('\n'));
    this.apiService.problemOneSolve(input)
    .subscribe((result: ResultPadel) => {
      this.output = '';
      Object.keys(result).forEach( key => {
        const category: WinnerPadel = result[key];       
        this.output = this.output + category.winner + ' ' + category.no_games + '<br>';
      });
    }, err => {
      this.output = 'Error: ' + err.response.message;
    });
  }

}
