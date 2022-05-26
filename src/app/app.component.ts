import { Component } from '@angular/core';
import { MenuItem } from './MenuItem';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ChirpusPizzaApp';

  items: MenuItem[] = [
    new MenuItem("Chicken Fingers", "dinner", 11.99),
    new MenuItem("Pizza", "dinner", 11.99),
    new MenuItem("Wings", "sides", 8.99),
    new MenuItem("Breadsticks", "sides", 4.99),
    new MenuItem("Ceasar Salad", "salads", 5.99),
    new MenuItem("Cinnamon Roll", "desert", 8.99),
  ];
}
