import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { QueueService } from '../queue.service';

@Component({
  selector: 'app-queue-monitor',
  templateUrl: './queue-monitor.component.html',
  styleUrls: ['./queue-monitor.component.css']
})
export class QueueMonitorComponent implements OnInit {
  currentNumber: number;
  queueCodes: number[];
  positions$: Observable<Position[]>;
  queue$: Observable<Queue>;
  @Input() queueId: number;

  constructor(
    private readonly queueService: QueueService
  ) {}

  ngOnInit() {
    this.positions$ = this.queueService.getQueueUsers(this.queueId, 6);
    this.queue$ = this.queueService.getQueue(this.queueId);
    this.positions$.subscribe((positions) => {
      this.currentNumber = positions[0] ? positions[0].code : 0;
      this.queueCodes = positions.slice(1, Infinity).map((position) => position.code);
    });
  }
}
