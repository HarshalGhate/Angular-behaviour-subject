import { Component, OnInit } from '@angular/core';
import { NotificationService } from '../notification.service';

@Component({
  selector: 'app-notification-board2',
  template: `<p>Notificaton-board component2</p>
  {{notificationMessage}}`,
  styleUrls: ['./notification-board2.component.css']
})
export class NotificationBoard2Component implements OnInit {

  constructor(private _notification:NotificationService) { }
  public notificationMessage:string = '';
  ngOnInit(): void {
    this._notification.notificationSubject.subscribe(d=>{
      this.notificationMessage=d
    })
  }

}
