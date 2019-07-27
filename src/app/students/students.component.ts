import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { StudentsGQL, StudentsQuery } from '../../generated/graphql';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css']
})
export class StudentsComponent {
  students: Observable<StudentsQuery['students']>;

  constructor(studentsGQL: StudentsGQL) {
    this.students = studentsGQL.watch().valueChanges.pipe(map(result => result.data.students));
  }
}
