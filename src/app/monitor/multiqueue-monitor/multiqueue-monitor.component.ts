import { Component, OnInit } from '@angular/core';
import { QueueService } from '../queue.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-multiqueue-monitor',
  templateUrl: './multiqueue-monitor.component.html',
  styleUrls: ['./multiqueue-monitor.component.css']
})
export class MultiqueueMonitorComponent implements OnInit {
  queues$: Observable<Queue[]>;

  constructor(private queueService: QueueService) {
    this.queues$ = queueService.getQueues();
  }

  ngOnInit() {
  }

}
