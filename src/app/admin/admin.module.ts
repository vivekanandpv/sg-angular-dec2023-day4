import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HttpClientModule } from '@angular/common/http';
import { DemoService } from '../demo.service';

@NgModule({
  declarations: [DashboardComponent],
  imports: [CommonModule, AdminRoutingModule],
  providers: [DemoService],
})
export class AdminModule {}
