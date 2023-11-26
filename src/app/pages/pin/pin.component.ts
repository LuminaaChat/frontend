import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterLink} from "@angular/router";

@Component({
  selector: 'app-pin',
  standalone: true,
    imports: [CommonModule, RouterLink],
  templateUrl: './pin.component.html',
  styleUrl: './pin.component.scss'
})
export class PinComponent {

}
