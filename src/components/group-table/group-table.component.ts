import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserEntity } from '../../models/user.entity';
import { GroupEntity } from '../../models/group.entity';

@Component({
  selector: 'app-group-table',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './group-table.component.html',
  styleUrl: './group-table.component.scss',
})
export class GroupTableComponent {
  @Input() content: UserEntity[] = [];

  remove(userId: string) {}
}
