import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainPageTabs } from '../../models/mainPageTabs.enum';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss',
})
export class NavbarComponent {
  @Output() onNavbarClicked = new EventEmitter<MainPageTabs>();
  tabs = MainPageTabs;
}
