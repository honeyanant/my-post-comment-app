import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.scss']
})
export class CommentComponent implements OnInit {
  comment: string = '';

  setCommentValue($event)
  {
    this.comment = $event.target.value;

  }
  postComment($event)
  {
    // document.getElementById('output').textContent = $event.target.value;
    // document.getElementById('output').textContent = this.comment;
    const newDivToAppend = document.createElement('textarea');
    const newCommentToAppend = document.createTextNode(this.comment);
    newDivToAppend.appendChild(newCommentToAppend);
    document.getElementById('output').appendChild(newDivToAppend);

    const appendnewLine = document.createElement('br');
    document.getElementById('output').appendChild(appendnewLine);



    console.log(event);
    }
  constructor() { }

  ngOnInit() {
  }

}
