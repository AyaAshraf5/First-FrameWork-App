import { Component } from '@angular/core';
import { SpecialComponent } from "../special/special.component";

@Component({
  selector: 'app-portfolio',
  imports: [SpecialComponent],
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.css'
})
export class PortfolioComponent {

}
