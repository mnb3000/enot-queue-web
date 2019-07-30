import { Component, Input } from '@angular/core';
import { QueuesQuery } from '../../../generated/graphql';

@Component({
  selector: 'app-queues',
  templateUrl: './queues.component.html',
  styleUrls: ['./queues.component.css']
})
export class QueuesComponent {
  displayedColumns = ['name', 'people'];

  @Input()
  path: string;
  @Input()
  dataSource: QueuesQuery['queues'] = [];
}
