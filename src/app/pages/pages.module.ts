import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProblemOneComponent } from './problem-one/problem-one.component';
import { Routes, RouterModule } from '@angular/router';
import { ComponentsModule } from '../components/components.module';
import { ProblemTwoComponent } from './problem-two/problem-two.component';
import { ProblemThreeComponent } from './problem-three/problem-three.component';
import { HomeComponent } from './home/home.component';


const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'problem-1',
    component: ProblemOneComponent
  },
  {
    path: 'problem-2',
    component: ProblemTwoComponent
  },
  {
    path: 'problem-3',
    component: ProblemThreeComponent
  },
  
];

@NgModule({
  declarations: [ProblemOneComponent, ProblemTwoComponent, ProblemThreeComponent, HomeComponent],
  imports: [
    CommonModule,
    ComponentsModule,
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class PagesModule { }
