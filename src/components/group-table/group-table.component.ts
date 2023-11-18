import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserEntity } from '../../models/user.entity';

@Component({
  selector: 'app-group-table',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './group-table.component.html',
  styleUrl: './group-table.component.scss'
})
export class GroupTableComponent {
  @Input() content: UserEntity[] = [];
  @Output() onUserEdit: EventEmitter<string> = new EventEmitter<string>();

  edit(userId: string) {
    this.onUserEdit.emit(userId);
  }
}

