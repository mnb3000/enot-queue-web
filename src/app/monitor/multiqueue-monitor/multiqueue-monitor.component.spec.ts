import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MultiqueueMonitorComponent } from './multiqueue-monitor.component';

describe('MultiqueueMonitorComponent', () => {
  let component: MultiqueueMonitorComponent;
  let fixture: ComponentFixture<MultiqueueMonitorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MultiqueueMonitorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MultiqueueMonitorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
