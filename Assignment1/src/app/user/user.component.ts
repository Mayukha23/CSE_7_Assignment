import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent {
  user = {
    username: 'Clara003',
    email: 'clara003.com',
    role: 'Premium User',
    lastLogin: '11-06-2024'
  };
}