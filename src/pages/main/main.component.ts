import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from '../../components/navbar/navbar.component';
import { EmployeeComponent } from '../employee/employee.component';
import { GroupsComponent } from '../groups/groups.component';
import { MainPageTabs } from '../../models/mainPageTabs.enum';

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [CommonModule, NavbarComponent, EmployeeComponent, GroupsComponent],
  templateUrl: './main.component.html',
  styleUrl: './main.component.scss',
})
export class MainComponent {
  currentTab: MainPageTabs = MainPageTabs.User;
  tabs = MainPageTabs;

  changeTab(tab: MainPageTabs) {
    this.currentTab = tab;
  }
}
