import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Course } from '../model/course'


@Component({
  selector: 'course-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './course-card.component.html',
  styleUrl: './course-card.component.css'
})
export class CourseCardComponent {
  @Input({
    required: true
  })
  course: Course;

  @Input({
    required: true
  })
  index: number;

  @Input({
    required: true
  })
  count: number;

  @Output('courseSelected')
  courseEmitter = new EventEmitter<Course>();

  onCourseViewed() {
    this.courseEmitter.emit(this.course);
  }

  cardClasses() {
    return;

    // can be a string, list of string, or a configuration class
    return this.course.category == 'BEGINNER' ? 'beginner': null;

    return {
      'beginner': this.course.category == 'BEGINNER',
    }
  }

  cardStyles() {
    return {
      // 'background-image': 'url(' + this.course.iconUrl + ')'
    }
  }
}
