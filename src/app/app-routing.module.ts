import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { QueuesComponent } from './queues/queues.component';
import { QueueComponent } from './queue/queue.component';

const routes: Routes = [
  { path: 'queues', component: QueuesComponent },
  { path: 'queue/:id', component: QueueComponent },
  { path: '', redirectTo: '/queues', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
