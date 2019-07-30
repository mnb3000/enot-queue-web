import { Component } from '@angular/core';
import { QueueGQL, QueueQuery, QueueUpdateGQL, QueueUpdateSubscription } from '../../../generated/graphql';
import { ActivatedRoute } from '@angular/router';
import { NavbarTextService } from '../../core/navbar-text.service';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-queue-monitor',
  templateUrl: './queue-monitor.component.html',
  styleUrls: ['./queue-monitor.component.css']
})
export class QueueMonitorComponent {
  currentNumber: number;
  queueIds: number[];
  queue: Observable<QueueQuery['queueById']>;
  queueUpdate: Observable<QueueUpdateSubscription['queueUpdate']>;

  constructor(
    private queueGQL: QueueGQL,
    private queueUpdateGQL: QueueUpdateGQL,
    private route: ActivatedRoute,
    private textService: NavbarTextService,
  ) {
    const queueUpdateHandler = (queueUpdate: QueueQuery['queueById']) => {
      textService.emitChange(queueUpdate.name);
      this.currentNumber = queueUpdate.studentToQueuesInQueue[0]
        ? queueUpdate.studentToQueuesInQueue[0].studentToQueueId
        : 0;
      this.queueIds = queueUpdate.studentToQueuesInQueue
        .slice(1, 6)
        .map(studentToQueue => studentToQueue.studentToQueueId);
      console.log(this.queueIds);
    };
    route.params.subscribe((params) => {
      this.queue = queueGQL.watch({ queueId: params.id }).valueChanges.pipe(map(result => result.data.queueById));
      this.queueUpdate = queueUpdateGQL.subscribe({ queueId: params.id }).pipe(map(result => result.data.queueUpdate));
      this.queue.subscribe(queueUpdateHandler);
      this.queueUpdate.subscribe(queueUpdateHandler);
    });
  }
}
