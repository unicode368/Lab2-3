import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss']
})
export class BlogComponent implements OnInit {

  posts = [{name: 'Lorem', content: 'ipsum dolor.'}];

  newPost = '';

  SABAKA = false;

  constructor() { }

  onAddPost() {
     this.SABAKA = true;
  }

  changeColor() {

  }

  post() {

  }

  ngOnInit() {
  }

}
