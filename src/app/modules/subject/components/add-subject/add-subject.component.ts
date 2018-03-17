import { Component, OnInit } from '@angular/core';
import { SubjectService } from '../../../../shared/services/subject.service';

@Component({
  selector: 'app-add-subject',
  templateUrl: './add-subject.component.html',
  styleUrls: ['./add-subject.component.css']
})
export class AddSubjectComponent implements OnInit {
  name: string;
  constructor(private subjectService: SubjectService) { }

  ngOnInit() {
  }

  addSubject = () => {
    this.subjectService.addSubject(this.name);
  }

}
