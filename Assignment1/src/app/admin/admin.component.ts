import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-admin',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent {
  adminStats = {
    totalUsers: 1400,
    activeUsers: 400,
    pendingApprovals: 60,
    lastBackup: '03-01-2025'
  };
}