import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MonitorRoutingModule } from './monitor-routing.module';
import { MonitorComponent } from './monitor/monitor.component';
import { SharedModule } from '../shared/shared.module';
import { QueuesMonitorComponent } from './queues-monitor/queues-monitor.component';
import { QueueMonitorComponent } from './queue-monitor/queue-monitor.component';


@NgModule({
  declarations: [MonitorComponent, QueuesMonitorComponent, QueueMonitorComponent],
  imports: [
    CommonModule,
    MonitorRoutingModule,
    SharedModule,
  ]
})
export class MonitorModule { }
