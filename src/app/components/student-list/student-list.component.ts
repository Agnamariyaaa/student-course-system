import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { DataService } from '../../services/data.service';
import { Student } from '../../models/student.model';

@Component({
  selector: 'app-student-list',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './student-list.component.html',
  styleUrl: './student-list.component.css'
})
export class StudentListComponent implements OnInit {
  students: Student[] = [];
  showForm = false;
  newStudent = { name: '', email: '', department: '' };
  departments = ['Computer Science', 'Engineering', 'Mathematics', 'Business', 'Arts'];

  constructor(private dataService: DataService) {}

  ngOnInit() {
    this.dataService.students$.subscribe(students => {
      this.students = students;
    });
  }

  addStudent() {
    if (this.newStudent.name && this.newStudent.email && this.newStudent.department) {
      this.dataService.addStudent(this.newStudent);
      this.newStudent = { name: '', email: '', department: '' };
      this.showForm = false;
    }
  }

  deleteStudent(id: number) {
    if (confirm('Are you sure you want to delete this student?')) {
      this.dataService.deleteStudent(id);
    }
  }

  toggleForm() {
    this.showForm = !this.showForm;
  }
}
