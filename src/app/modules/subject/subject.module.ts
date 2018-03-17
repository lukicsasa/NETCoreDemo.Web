import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SubjectRoutingModule } from './subject-routing.module';
import { SubjectComponent } from './subject.component';
import { SubjectsComponent } from './components/subjects/subjects.component';
import { AddSubjectComponent } from './components/add-subject/add-subject.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    SubjectRoutingModule,
    FormsModule
  ],
  declarations: [SubjectComponent, SubjectsComponent, AddSubjectComponent]
})
export class SubjectModule { }
