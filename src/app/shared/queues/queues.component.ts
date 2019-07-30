import { Component, Input } from '@angular/core';
import { QueuesGQL, QueuesQuery } from '../../../generated/graphql';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-queues',
  templateUrl: './queues.component.html',
  styleUrls: ['./queues.component.css']
})
export class QueuesComponent {
  displayedColumns = ['name', 'people'];
  queues: Observable<QueuesQuery['queues']>;
  dataSource: QueuesQuery['queues'] = [];

  @Input()
  path: string;
  constructor(private queuesGQL: QueuesGQL) {
    this.queues = queuesGQL.watch().valueChanges.pipe(map(result => result.data.queues));
    this.queues.subscribe((queues) => { this.dataSource = queues; });
  }
}
