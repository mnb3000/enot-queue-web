import { Injectable, OnDestroy } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, Subject, timer } from 'rxjs';
import { map, retry, share, switchMap, takeUntil } from 'rxjs/operators';

@Injectable()
export class QueueService implements OnDestroy {
  private stopPolling = new Subject();
  private httpOptions = {
    headers: new HttpHeaders({
      Authorization: 'Bearer wFznT8gYDJUmAhT6mCC6s66qnXMt5rivNlu2QBXx',
    })
  };

  constructor(private http: HttpClient) {}

  getQueueUsers(id: number, limit: number): [Observable<Position[]>, Observable<Position[]>] {
    const positions$ = timer(1, 2000).pipe(
      switchMap(
        () => this.http.get<PositionsResponse>(
          `https://api.admission.hatomist.pw/queues/${id}/users`,
          { ...this.httpOptions, params: { take: limit.toString() } }
        )
      ),
      retry(),
      share(),
      takeUntil(this.stopPolling),
      map((res) => res.positions)
    );
    return [
      positions$.pipe(map(positions => positions.filter(position => position.status === 'waiting'))),
      positions$.pipe(map(positions => positions.filter(position => position.status === 'processing'))),
    ];
  }

  getQueues() {
    return this.http.get<QueuesResponse>(`https://api.admission.hatomist.pw/queues/`, this.httpOptions).pipe(
      map((res) => res.queues.filter((queue => queue.active)))
    );
  }

  getQueue(id: number) {
    return this.http.get<QueueResponse>(`https://api.admission.hatomist.pw/queues/${id}`, this.httpOptions).pipe(
      map((res) => res.queue),
    );
  }

  ngOnDestroy() {
    this.stopPolling.next();
  }
}
