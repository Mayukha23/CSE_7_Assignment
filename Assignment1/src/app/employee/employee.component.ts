import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-employee',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent {
  employee = {
    name: 'Clara kenny',
    position: 'Python Developer',
    department: 'CSE',
    joinDate: '23-07-2024'
  };
}