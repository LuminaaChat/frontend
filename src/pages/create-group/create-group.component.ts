import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-create-group',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './create-group.component.html',
  styleUrl: './create-group.component.scss'
})
export class CreateGroupComponent {
  constructor(readonly router: Router) {}

  groupname: string = '';
  areas: string [] =['area1', 'area2'];
  employees: string[] = ['Danny', 'Christoph'];
  clients: string [] = ['Nils', 'Tasida'];

  addedEmployee: string[] = [];
  addedClient: string[] = [];

  selectedEmployee: string = '';
  selectedClient: string = '';

  addEmployee(){
    console.log(this.selectedEmployee);
    
    if(this.selectedEmployee){
      this.addedEmployee.push(this.selectedEmployee)
    }
  }


  addClient(){
    if(this.selectedClient){
      this.addedClient.push (this.selectedClient)
    }
  }
}
