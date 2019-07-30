import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { QueuesMonitorComponent } from './queues-monitor/queues-monitor.component';
import { QueueMonitorComponent } from './queue-monitor/queue-monitor.component';

const routes: Routes = [
  { path: 'queues', component: QueuesMonitorComponent },
  { path: 'queue/:id', component: QueueMonitorComponent },
  { path: '**', redirectTo: 'queues' },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MonitorRoutingModule { }
