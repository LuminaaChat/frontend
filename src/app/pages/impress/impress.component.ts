import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterLink} from "@angular/router";

@Component({
  selector: 'app-impress',
  standalone: true,
    imports: [CommonModule, RouterLink],
  templateUrl: './impress.component.html',
  styleUrl: './impress.component.scss'
})
export class ImpressComponent {

}
