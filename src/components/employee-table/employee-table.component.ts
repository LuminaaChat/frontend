import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserEntity } from '../../models/user.entity';

@Component({
  selector: 'app-employee-table',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './employee-table.component.html',
  styleUrl: './employee-table.component.scss',
})
export class EmployeeTableComponent {
  @Input() content: UserEntity[] = [];
  @Output() onUserEdit: EventEmitter<string> = new EventEmitter<string>();

  edit(userId: string) {
    this.onUserEdit.emit(userId);
  }
}
