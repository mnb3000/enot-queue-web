import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin/admin/admin.component';
import { MonitorComponent } from './monitor/monitor/monitor.component';

const routes: Routes = [
  {
    path: 'admin',
    component: AdminComponent,
    loadChildren: () => import('./admin/admin.module').then(mod => mod.AdminModule)
  },
  {
    path: 'monitor',
    component: MonitorComponent,
    loadChildren: () => import('./monitor/monitor.module').then(mod => mod.MonitorModule)
  },
  { path: '**', redirectTo: '/monitor/queues', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
