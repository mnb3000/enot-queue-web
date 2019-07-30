import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QueuesMonitorComponent } from './queues-monitor.component';

describe('QueuesMonitorComponent', () => {
  let component: QueuesMonitorComponent;
  let fixture: ComponentFixture<QueuesMonitorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QueuesMonitorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QueuesMonitorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
