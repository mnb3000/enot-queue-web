import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MonitorRoutingModule } from './monitor-routing.module';
import { MonitorComponent } from './monitor/monitor.component';
import { SharedModule } from '../shared/shared.module';
import { QueuesMonitorComponent } from './queues-monitor/queues-monitor.component';
import { QueueMonitorComponent } from './queue-monitor/queue-monitor.component';
import { MultiqueueMonitorComponent } from './multiqueue-monitor/multiqueue-monitor.component';
import { QueueService } from './queue.service';


@NgModule({
  declarations: [MonitorComponent, QueuesMonitorComponent, QueueMonitorComponent, MultiqueueMonitorComponent],
  imports: [
    CommonModule,
    MonitorRoutingModule,
    SharedModule,
  ],
  providers: [QueueService],
})
export class MonitorModule { }
