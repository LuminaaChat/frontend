import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterLink} from "@angular/router";

@Component({
  selector: 'app-data-privacy',
  standalone: true,
    imports: [CommonModule, RouterLink],
  templateUrl: './data-privacy.component.html',
  styleUrl: './data-privacy.component.scss'
})
export class DataPrivacyComponent {

}
