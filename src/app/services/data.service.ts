import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Student } from '../models/student.model';
import { Course } from '../models/course.model';
import { Enrollment } from '../models/enrollment.model';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private students = new BehaviorSubject<Student[]>([
    { id: 1, name: 'John Doe', email: 'john@example.com', department: 'Computer Science' },
    { id: 2, name: 'Jane Smith', email: 'jane@example.com', department: 'Engineering' },
    { id: 3, name: 'Bob Johnson', email: 'bob@example.com', department: 'Mathematics' }
  ]);

  private courses = new BehaviorSubject<Course[]>([
    { id: 1, title: 'Angular Fundamentals', department: 'Computer Science', seats: 30 },
    { id: 2, title: 'Advanced TypeScript', department: 'Computer Science', seats: 25 },
    { id: 3, title: 'Web Development', department: 'Engineering', seats: 35 },
    { id: 4, title: 'Calculus I', department: 'Mathematics', seats: 40 }
  ]);

  private enrollments = new BehaviorSubject<Enrollment[]>([
    { id: 1, studentId: 1, courseId: 1, enrollmentDate: new Date('2024-01-15') },
    { id: 2, studentId: 1, courseId: 2, enrollmentDate: new Date('2024-01-15') },
    { id: 3, studentId: 2, courseId: 3, enrollmentDate: new Date('2024-01-20') }
  ]);

  students$ = this.students.asObservable();
  courses$ = this.courses.asObservable();
  enrollments$ = this.enrollments.asObservable();

  private studentCounter = 4;
  private courseCounter = 5;
  private enrollmentCounter = 4;

  addStudent(student: Omit<Student, 'id'>) {
    const newStudent: Student = { ...student, id: this.studentCounter++ };
    this.students.next([...this.students.value, newStudent]);
  }

  addCourse(course: Omit<Course, 'id'>) {
    const newCourse: Course = { ...course, id: this.courseCounter++ };
    this.courses.next([...this.courses.value, newCourse]);
  }

  enrollStudent(studentId: number, courseId: number) {
    const newEnrollment: Enrollment = {
      id: this.enrollmentCounter++,
      studentId,
      courseId,
      enrollmentDate: new Date()
    };
    this.enrollments.next([...this.enrollments.value, newEnrollment]);
  }

  getStudentEnrollments(studentId: number) {
    return this.enrollments.value.filter(e => e.studentId === studentId);
  }

  getCourseEnrollments(courseId: number) {
    return this.enrollments.value.filter(e => e.courseId === courseId).length;
  }

  deleteStudent(studentId: number) {
    this.students.next(this.students.value.filter(s => s.id !== studentId));
    this.enrollments.next(this.enrollments.value.filter(e => e.studentId !== studentId));
  }

  deleteCourse(courseId: number) {
    this.courses.next(this.courses.value.filter(c => c.id !== courseId));
    this.enrollments.next(this.enrollments.value.filter(e => e.courseId !== courseId));
  }
}
