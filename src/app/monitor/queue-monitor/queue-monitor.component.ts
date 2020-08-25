import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { QueueService } from '../queue.service';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-queue-monitor',
  templateUrl: './queue-monitor.component.html',
  styleUrls: ['./queue-monitor.component.css']
})
export class QueueMonitorComponent implements OnInit {
  currentNumber: number;
  queueCodes: number[];
  processing$: Observable<string>;
  waiting$: Observable<number[]>;
  queue$: Observable<Queue>;
  @Input() queueId: number;

  constructor(
    private readonly queueService: QueueService
  ) {}

  ngOnInit() {
    const [waiting, processing] = this.queueService.getQueueUsers(this.queueId, 7);
    this.waiting$ = waiting.pipe(
      map((positions) => positions.map(position => position.code)),
    );
    this.processing$ = processing.pipe(
      map((positions) => positions.reduce<string>((out, position) => out += `${position.code.toString()} `, ''))
    );
    this.queue$ = this.queueService.getQueue(this.queueId);
  }
}
