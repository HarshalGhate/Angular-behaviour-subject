import { Component, OnInit } from '@angular/core';
import { NotificationService } from '../notification.service';

@Component({
  selector: 'app-notification-board',
  template: `<p>Notificaton-board component</p>
  {{notificationMessage}}`,
  styleUrls: ['./notification-board.component.css']
})
export class NotificationBoardComponent implements OnInit {

  constructor(private _notifcation: NotificationService) { }

  notificationMessage: string = '';
  ngOnInit(): void {
    this._notifcation.notificationSubject.subscribe(d => {
      console.warn(d);
      
      this.notificationMessage=d
    })
  }

}
