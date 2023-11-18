import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserEntity } from '../../models/user.entity';

@Component({
  selector: 'app-client-table',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './client-table.component.html',
  styleUrl: './client-table.component.scss'
})
export class ClientTableComponent {
  @Input() content: UserEntity[] = [];
  @Output() onUserEdit: EventEmitter<string> = new EventEmitter<string>();

  edit(userId: string) {
    this.onUserEdit.emit(userId);
  }
}

