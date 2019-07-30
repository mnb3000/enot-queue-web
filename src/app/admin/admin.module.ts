import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { QueuesAdminComponent } from './queues-admin/queues-admin.component';
import { QueueAdminComponent } from './queue-admin/queue.component';
import { SharedModule } from '../shared/shared.module';
import { AdminComponent } from './admin/admin.component';

@NgModule({
  declarations: [
    QueuesAdminComponent,
    QueueAdminComponent,
    AdminComponent,
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    SharedModule
  ]
})
export class AdminModule { }
