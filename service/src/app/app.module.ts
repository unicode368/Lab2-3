import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { MyStoryComponent } from './my-story/my-story.component';
import { BlogComponent } from './blog/blog.component';
import { OrderMemeComponent } from './order-a-meme/order-a-meme.component';
import { SeeMyMemesComponent } from './see-my-memes/see-my-memes.component';
import { ChatComponent } from './chat/chat.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    LoginComponent,
    MyStoryComponent,
    BlogComponent,
    OrderMemeComponent,
    SeeMyMemesComponent,
    ChatComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
