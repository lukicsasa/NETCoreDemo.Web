import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SubjectComponent } from './subject.component';
import { SubjectsComponent } from './components/subjects/subjects.component';
import { AddSubjectComponent } from './components/add-subject/add-subject.component';

const routes: Routes = [
  {
    path: '',
    component: SubjectComponent,
    children: [
      {path: 'all', redirectTo: ''},
      {path: '', pathMatch: 'full', component: SubjectsComponent},
      {path: 'add', component: AddSubjectComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SubjectRoutingModule { }
