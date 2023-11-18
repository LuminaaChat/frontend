import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from 'express';

@Component({
  selector: 'app-create-group',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './create-group.component.html',
  styleUrl: './create-group.component.scss'
})
export class CreateGroupComponent {
  constructor(readonly router: Router) {}

  groupname: string = '';
  areas: string [] =['area1', 'area2'];
  employees: string[] = [];
  clients: string [] = [];

}
