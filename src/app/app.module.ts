import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IonicModule } from '@ionic/angular';
import { ChatWebComponent } from './chat-web/chat-web.component';


@NgModule({
  declarations: [AppComponent, ChatWebComponent],
  imports: [BrowserModule, AppRoutingModule, IonicModule.forRoot()],
  providers: [],
  bootstrap: [AppComponent],
  
})
export class AppModule {}
