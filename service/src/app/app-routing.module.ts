import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { BlogComponent } from './blog/blog.component';
import { MyStoryComponent } from './my-story/my-story.component';
import { SeeMyMemesComponent } from './see-my-memes/see-my-memes.component';
import { OrderMemeComponent } from './order-a-meme/order-a-meme.component';
import { ChatComponent } from './chat/chat.component';
import { HomeComponent } from './home/home.component';


const routes: Routes = [
   {
     path: 'home',
     component: HomeComponent
   },
   {
     path: 'login',
     component: LoginComponent
   },
   {
     path: 'register',
     component: RegisterComponent
   },
   {
     path: 'blog',
     component: BlogComponent
   },
   {
     path: 'story',
     component: MyStoryComponent
   },
   {
     path: 'my_memes',
     component: SeeMyMemesComponent
   },
   {
     path: 'order_meme',
     component: OrderMemeComponent
   },
   {
     path: 'chat',
     component: ChatComponent
   },
   {
     path: '',
     redirectTo: '/home',
     pathMatch: 'full'
   }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
