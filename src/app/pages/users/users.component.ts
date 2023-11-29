import {Component, computed, inject, Signal} from '@angular/core';
import { CommonModule } from '@angular/common';
import {UsersApiService} from "../../../services/users-api.service";
import {ReactiveFormsModule} from "@angular/forms";

@Component({
  selector: 'app-users',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './users.component.html',
  styleUrl: './users.component.scss'
})
export class UsersComponent {
  private usersApiService = inject(UsersApiService);
  public users$ = this.usersApiService.list();
  // users: Signal<User[]> = this.usersApiService.list() as Signal<User[]>;
  totalUsers: Signal<number> = computed(() => this.users$.length);
  sidebar: boolean = false;

  constructor() {}

  toggleSidebar() {
    console.log('click')
    this.sidebar = !this.sidebar;
  }
}
