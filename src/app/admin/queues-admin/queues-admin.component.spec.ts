import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QueuesAdminComponent } from './queues-admin.component';

describe('QueuesAdminComponent', () => {
  let component: QueuesAdminComponent;
  let fixture: ComponentFixture<QueuesAdminComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QueuesAdminComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QueuesAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
