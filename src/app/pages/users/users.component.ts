import {Component, computed, inject, Signal} from '@angular/core';
import { CommonModule } from '@angular/common';
import {UsersApiService} from "../../../services/users-api.service";

@Component({
  selector: 'app-users',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './users.component.html',
  styleUrl: './users.component.scss'
})
export class UsersComponent {
  private usersApiService = inject(UsersApiService);
  public users$ = this.usersApiService.list();
  // users: Signal<User[]> = this.usersApiService.list() as Signal<User[]>;
  totalUsers: Signal<number> = computed(() => this.users$.length);


  constructor() { }
}
