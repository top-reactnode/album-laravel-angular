import { Component, OnInit, Input } from '@angular/core';
import { Post } from '../post';
import { PostService } from '../post.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  @Input() post: Post;
  
  constructor(
    private postService: PostService) { }
  
  ngOnInit() {
  }

  like() {
    this.postService.like(this.post.id);
  }

  delete() {
    this.postService.delete(this.post.id);
  }
}
