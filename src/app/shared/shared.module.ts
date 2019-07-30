import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { QueuesComponent } from './queues/queues.component';
import { MaterialModule } from './material/material.module';
import { GraphQLModule } from './graphql/graphql.module';
import { RouterModule } from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';

@NgModule({
  declarations: [
    QueuesComponent,
    NavbarComponent,
  ],
  imports: [
    CommonModule,
    MaterialModule,
    GraphQLModule,
    RouterModule
  ],
  exports: [
    CommonModule,
    QueuesComponent,
    NavbarComponent,
    MaterialModule,
    GraphQLModule
  ]
})
export class SharedModule { }
