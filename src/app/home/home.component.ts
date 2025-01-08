import { Component } from '@angular/core';
import { SpecialComponent } from "../special/special.component";

@Component({
  selector: 'app-home',
  imports: [SpecialComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
