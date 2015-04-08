import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material';
import { Post } from '../post';

@Component({
  selector: 'app-post-dialog',
  templateUrl: './post-dialog.component.html',
  styleUrls: ['./post-dialog.component.css']
})
export class PostDialogComponent implements OnInit {

  private filename: string = '';

  private dados = {
    post: new Post("","", "", "", "", ""),
    arquivo: null
  };

  constructor(
    public dialogref: MatDialogRef<PostDialogComponent>) { }

  ngOnInit() {
  }

  changedfile(event) {
    // console.log(event.target.files[0]);
    this.filename = event.target.files[0].name;
    this.dados.arquivo = event.target.files[0];
  }

  save() {
    this.dialogref.close(this.dados);
  }

  cancel() {
    this.dialogref.close(null);
  }
}
