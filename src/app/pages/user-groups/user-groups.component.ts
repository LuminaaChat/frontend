import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule} from "@angular/forms";

@Component({
  selector: 'app-user-groups',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './user-groups.component.html',
  styleUrl: './user-groups.component.scss'
})
export class UserGroupsComponent {
  sidebar: boolean = false;

  constructor() {}

  toggleSidebar() {
    this.sidebar = !this.sidebar;
  }
}
