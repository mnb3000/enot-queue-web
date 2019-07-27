import { Component, OnInit } from '@angular/core';
import {
  QueueFilterGQL, QueueFilterSubscription, QueueFilterQueryQuery, QueueFilterQueryGQL, Status, PassStudentGQL
} from 'src/generated/graphql';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-queue',
  templateUrl: './queue.component.html',
  styleUrls: ['./queue.component.css']
})
export class QueueComponent {
  queueUpdates: Observable<QueueFilterSubscription['queueUpdateFilter']>;
  queueFilter: Observable<QueueFilterQueryQuery['queueFilter']>;
  displayedColumns = ['id', 'status', 'name'];
  statusEmoji: Record<Status, string> = {
    inQueue: '⏱',
    current: '➡️',
    passed: '✅',
    declined: '🚫',
    left: '🏃‍♂️',
  };
  queueName: string;
  dataSource: QueueFilterSubscription['queueUpdateFilter']['upcomingStudentToQueues'];
  constructor(
    private queueFilterGQL: QueueFilterGQL,
    private queueFilterQueryGQL: QueueFilterQueryGQL,
    private passStudentGQL: PassStudentGQL,
    private route: ActivatedRoute,
    ) {
    const queueUpdateHandler = (queueUpdate: QueueFilterSubscription['queueUpdateFilter']) => {
      const currentStudent = queueUpdate.upcomingStudentToQueues[0];
      if (!currentStudent) {
        this.dataSource = [
          ...queueUpdate.historyStudentToQueues.reverse(),
        ];
        return;
      }
      this.queueName = currentStudent.queue.name;
      this.dataSource = [
        ...queueUpdate.historyStudentToQueues.reverse(),
        { ...currentStudent, status: Status.Current },
        ...queueUpdate.upcomingStudentToQueues.slice(1)
      ];
    };
    route.params.subscribe((params) => {
      this.queueUpdates = queueFilterGQL.subscribe({ queueId: params.id }).pipe(map(result => result.data.queueUpdateFilter));
      this.queueFilter = queueFilterQueryGQL.watch({ queueId: params.id }).valueChanges.pipe(map(result => result.data.queueFilter));
      this.queueFilter.subscribe(queueUpdateHandler);
      this.queueUpdates.subscribe(queueUpdateHandler);
    });
  }

  async passStudent(isPassed: boolean) {
    await this.passStudentGQL.mutate({ queueName: this.queueName, isPassed }).toPromise();
  }
}
