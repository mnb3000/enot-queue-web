import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { QueuesAdminComponent } from './queues-admin/queues-admin.component';
import { QueueAdminComponent } from './queue-admin/queue.component';


const routes: Routes = [
  { path: 'queues', component: QueuesAdminComponent },
  { path: 'queue/:id', component: QueueAdminComponent },
  { path: '**', redirectTo: 'queues' }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
