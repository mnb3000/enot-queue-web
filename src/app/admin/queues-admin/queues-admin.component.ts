import { Component } from '@angular/core';
import { QueuesGQL, QueuesQuery } from '../../../generated/graphql';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-queues-admin',
  templateUrl: './queues-admin.component.html',
  styleUrls: ['./queues-admin.component.css']
})
export class QueuesAdminComponent {
  queues: Observable<QueuesQuery['queues']>;
  dataSource: QueuesQuery['queues'] = [];

  constructor(private queuesGQL: QueuesGQL) {
    this.queues = queuesGQL.watch().valueChanges.pipe(map(result => result.data.queues));
    this.queues.subscribe((queues) => { this.dataSource = queues; });
  }
}
