import { Component } from '@angular/core';
import { DemoService } from 'src/app/demo.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent {
  constructor(private demo: DemoService) {}
}
