import { Component } from '@angular/core';
import { COURSES } from '../db-data';
import { Course } from './model/course'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  courses = [...COURSES];

  startDate = new Date(2000, 0, 1);
  price = 3.15
  roundPrice = 3.14159265

  onCourseSelected(course: Course) {
    console.log(course);
  }

  trackCourse(index: number, course: Course) {
    return course.id;
  }

}
