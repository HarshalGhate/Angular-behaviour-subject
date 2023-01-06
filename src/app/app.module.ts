import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NotificationService } from './notification.service';
import { ContactComponent } from './contact/contact.component';
import { NotificationBoardComponent } from './notification-board/notification-board.component';
import { NotificationBoard2Component } from './notification-board2/notification-board2.component';

@NgModule({
  declarations: [
    AppComponent,
    ContactComponent,
    NotificationBoardComponent,
    NotificationBoard2Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [NotificationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
