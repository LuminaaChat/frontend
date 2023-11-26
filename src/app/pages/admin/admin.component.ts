import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule} from "@angular/forms";
import {NavbarComponent} from "../../../shared/components/navbar/navbar.component";
import {SidebarComponent} from "../../../shared/components/sidebar/sidebar.component";
import {RouterOutlet} from "@angular/router";

@Component({
  selector: 'app-admin',
  standalone: true,
  imports: [CommonModule, FormsModule, NavbarComponent, SidebarComponent, RouterOutlet],
  templateUrl: './admin.component.html',
  styleUrl: './admin.component.scss'
})
export class AdminComponent {
  sidebar: boolean = false;

  constructor() {}

  toggleSidebar() {
    this.sidebar = !this.sidebar;
  }
}
