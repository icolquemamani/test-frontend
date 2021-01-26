import { Injectable, Input } from '@angular/core';
import { environment } from '../../environments/environment';
import { ajax, AjaxRequest } from 'rxjs/ajax'
import { pluck } from "rxjs/operators";

const API_URL = environment.apiUrl;



@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private headers = {
    'Content-Type': 'application/json',
  };

  private responseAjax(ajaxRequest: AjaxRequest) {
    return ajax(ajaxRequest).pipe(pluck('response'));
  }

  private problemSolve(idProblem: number, input: string) {
    return this.responseAjax({
      url: `${API_URL}/problem/${idProblem}/solve`,
      method: 'POST',
      body: {
        input
      },
      headers: this.headers
    })
  }

  problemOneSolve( input: string) {
    return this.problemSolve(1, input);
  }

  problemTwoSolve( input: string) {
    return this.problemSolve(2, input);
  }

  problemThreeSolve( input: string) {
    return this.problemSolve(3, input);
  }
}
