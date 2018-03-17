import { Component, OnInit } from '@angular/core';
import { Subject } from '../../../../shared/models/subject';
import { SubjectService } from '../../../../shared/services/subject.service';

@Component({
  selector: 'app-subjects',
  templateUrl: './subjects.component.html',
  styleUrls: ['./subjects.component.css']
})
export class SubjectsComponent implements OnInit {
  subjects: Subject[];
  constructor(private subjectService: SubjectService) { }

  ngOnInit() {
    this.getSubjects();
  }

  getSubjects = () => {
    this.subjectService.getSubjects().subscribe(data => this.subjects = data);
  }

}
