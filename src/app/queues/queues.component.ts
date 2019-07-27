import { Component } from '@angular/core';
import { QueuesGQL, QueuesQuery } from '../../generated/graphql';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-queues',
  templateUrl: './queues.component.html',
  styleUrls: ['./queues.component.css']
})
export class QueuesComponent {
  queues: Observable<QueuesQuery['queues']>;
  displayedColumns = ['name', 'people'];
  dataSource: QueuesQuery['queues'] = [];
  constructor(private queuesGQL: QueuesGQL) {
    this.queues = queuesGQL.watch().valueChanges.pipe(map(result => result.data.queues));
    this.queues.subscribe((queues) => { this.dataSource = queues; });
  }
}
