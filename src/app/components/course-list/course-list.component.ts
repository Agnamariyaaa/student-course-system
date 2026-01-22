import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { DataService } from '../../services/data.service';
import { Course } from '../../models/course.model';

@Component({
  selector: 'app-course-list',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './course-list.component.html',
  styleUrl: './course-list.component.css'
})
export class CourseListComponent implements OnInit {
  courses: Course[] = [];
  showForm = false;
  newCourse = { title: '', department: '', seats: 30 };
  departments = ['Computer Science', 'Engineering', 'Mathematics', 'Business', 'Arts'];

  constructor(private dataService: DataService) {}

  ngOnInit() {
    this.dataService.courses$.subscribe(courses => {
      this.courses = courses;
    });
  }

  addCourse() {
    if (this.newCourse.title && this.newCourse.department && this.newCourse.seats > 0) {
      this.dataService.addCourse(this.newCourse);
      this.newCourse = { title: '', department: '', seats: 30 };
      this.showForm = false;
    }
  }

  deleteCourse(id: number) {
    if (confirm('Are you sure you want to delete this course?')) {
      this.dataService.deleteCourse(id);
    }
  }

  toggleForm() {
    this.showForm = !this.showForm;
  }

  getEnrollmentCount(courseId: number) {
    return this.dataService.getCourseEnrollments(courseId);
  }
}
