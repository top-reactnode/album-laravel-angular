import { Injectable } from '@angular/core';
import { HttpClient, HttpEventType, HttpEvent } from '@angular/common/http';
import { Post } from './post';

@Injectable()
export class PostService {

  public posts: Post[] = [];

  constructor(private http: HttpClient) { 
    this.http.get("/api/").subscribe(
      (posts: any[]) => {
        for(let p of posts) {
          this.posts.push(
            new Post(
              p.name, p.title,p.subtitle,
              p.email,p.message,p.file,
              p.id,p.likes
            )
          );
        }
      }
    );
  }

  save(post: Post, file: File) {
    const uploadData = new FormData();
    uploadData.append('name', post.name);
    uploadData.append('email', post.email);
    uploadData.append('title', post.title);
    uploadData.append('subtitle', post.subtitle);
    uploadData.append('message', post.message);
    uploadData.append('file', file, file.name);
    
    this.http.post("/api", uploadData, { reportProgress: true, observe: 'events'})
      .subscribe((event: any) => {
        if (event.type == HttpEventType.Response) {
          // console.log(event);
          let p: any = event.body;
          this.posts.push(
            new Post(
              p.name, p.title,p.subtitle,
              p.email,p.message,p.file,
              p.id,p.likes
            )
          );          
        }
        if (event.type == HttpEventType.UploadProgress) {
          console.log('UploadProgress');
          console.log(event);
        }        
      })


  }

  like(id: number) {
    this.http.get('/api/like/' + id)
      .subscribe(
        (event: any) => {
          let p = this.posts.find((p) => p.id == id);
          p.likes = event.likes;
        }
      );
  }

  delete(id: number) {
    this.http.delete("/api/" + id)
      .subscribe( (event) => {
        // console.log(event);
        let i = this.posts.findIndex((p) => p.id == id);
        if (i >= 0)
          this.posts.splice(i,1);
      });
  }


}
