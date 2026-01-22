import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { DataService } from '../../services/data.service';
import { Student } from '../../models/student.model';
import { Course } from '../../models/course.model';
import { Enrollment } from '../../models/enrollment.model';

@Component({
  selector: 'app-enroll-student',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './enroll-student.component.html',
  styleUrl: './enroll-student.component.css'
})
export class EnrollStudentComponent implements OnInit {
  students: Student[] = [];
  courses: Course[] = [];
  enrollments: Enrollment[] = [];
  selectedStudent: number | null = null;
  selectedCourse: number | null = null;
  enrollmentMessage = '';

  constructor(private dataService: DataService) {}

  ngOnInit() {
    this.dataService.students$.subscribe(s => this.students = s);
    this.dataService.courses$.subscribe(c => this.courses = c);
    this.dataService.enrollments$.subscribe(e => this.enrollments = e);
  }

  enrollStudent() {
    if (this.selectedStudent && this.selectedCourse) {
      const isAlreadyEnrolled = this.enrollments.some(
        e => e.studentId === this.selectedStudent && e.courseId === this.selectedCourse
      );
      
      if (isAlreadyEnrolled) {
        this.enrollmentMessage = 'Student is already enrolled in this course!';
      } else {
        this.dataService.enrollStudent(this.selectedStudent, this.selectedCourse);
        this.enrollmentMessage = 'Student enrolled successfully!';
        this.selectedStudent = null;
        this.selectedCourse = null;
        setTimeout(() => this.enrollmentMessage = '', 3000);
      }
    }
  }

  getStudentEnrollments(studentId: number) {
    return this.enrollments.filter(e => e.studentId === studentId);
  }

  getCourseName(courseId: number) {
    return this.courses.find(c => c.id === courseId)?.title || 'Unknown';
  }

  getStudentName(studentId: number) {
    return this.students.find(s => s.id === studentId)?.name || 'Unknown';
  }
}
