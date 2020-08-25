import { Injectable, OnDestroy } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Subject, timer } from 'rxjs';
import { map, retry, switchMap, takeUntil } from 'rxjs/operators';

@Injectable()
export class QueueService implements OnDestroy {
  private stopPolling = new Subject();
  private httpOptions = {
    headers: new HttpHeaders({
      Authorization: 'Bearer wFznT8gYDJUmAhT6mCC6s66qnXMt5rivNlu2QBXx',
    })
  };

  constructor(private http: HttpClient) {}

  getQueueUsers(id: number, limit: number) {
    return timer(1, 2000).pipe(
      switchMap(
        () => this.http.get<PositionsResponse>(
          `http://134.122.90.94:4444/queues/${id}/users`,
          { ...this.httpOptions, params: { take: limit.toString() } }
        )
      ),
      retry(),
      takeUntil(this.stopPolling),
      map((res) => res.positions)
    );
  }

  getQueues() {
    return this.http.get<QueuesResponse>(`http://134.122.90.94:4444/queues/`, this.httpOptions).pipe(
      map((res) => res.queues.filter((queue => queue.active)))
    );
  }

  getQueue(id: number) {
    return this.http.get<QueueResponse>(`http://134.122.90.94:4444/queues/${id}`, this.httpOptions).pipe(
      map((res) => res.queue),
    );
  }

  ngOnDestroy() {
    this.stopPolling.next();
  }
}
