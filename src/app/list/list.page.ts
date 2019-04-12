import { Post } from './../post';
import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-list',
  templateUrl: 'list.page.html',
  styleUrls: ['list.page.scss']
})
export class ListPage implements OnInit {
  postToDisplay: Post[] = [];

  constructor(private dataSrv: DataService) {
    this.dataSrv.getPosts().subscribe( data => {

      // filter what mesages should be shown
      for (let i = 0; i < data.length; i++) {
        let thePost = data[i];
        if (thePost.to === 'Everyone' || thePost.to === 'Doug') {
          this.postToDisplay.push(thePost);
        }
      }

    });
  }

  ngOnInit() {}
}

/**
 * Inyect the service
 *
 * create a local array
 * the the Post from the service to the local array
 *
 * html
 *   - create an *ngFor to travel the local array
 *   -  crate a card for each post
 *
 */
