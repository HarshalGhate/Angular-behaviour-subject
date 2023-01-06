import { Component, OnInit } from '@angular/core';
import { NotificationService } from '../notification.service';

@Component({
  selector: 'app-contact',
  template: `<p>Contact component</p>
  Enter Message : <input type="text" #message>
             <button (click)="sendMessage(message)">Send Message</button>  `,
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  constructor(private notificationService: NotificationService) { }

  ngOnInit(): void {
  }

  sendMessage(data: any) {
    this.notificationService.sendNotification(data.value)
  }

}
