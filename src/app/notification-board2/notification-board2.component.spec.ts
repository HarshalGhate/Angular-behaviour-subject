import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NotificationBoard2Component } from './notification-board2.component';

describe('NotificationBoard2Component', () => {
  let component: NotificationBoard2Component;
  let fixture: ComponentFixture<NotificationBoard2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NotificationBoard2Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NotificationBoard2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
