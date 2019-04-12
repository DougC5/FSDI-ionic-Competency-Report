import { DataService } from './../data.service';
import { Component } from '@angular/core';
import { Post } from '../post';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss']
})
export class HomePage {
  // here Angular will put the value from the textarea
  postContent = '';
  imageUrl = '';
  to = 'Everyone';

  constructor(private dataSrv: DataService) {}

  createPost() {
    console.log('create btn clicked', this.postContent);

    // save the post into the service
    var p = new Post();
    p.content = this.postContent; // asign the content
    p.imageUrl = this.imageUrl; // assign the imageUrl
    p.to = this.to;

    /*
     - create a variable above (like postContent [imageUrl] )
     - html
        - create a control ( ion-input )
        - bind the value to the variable

     - asign the variable to p object

    */

    console.log(p);
    this.dataSrv.savePost(p);

    // clear the capture form
    this.postContent = '';
    this.imageUrl = '';
  }
}

/*
 - create a service (data) [ ionic generate service data ]
    - put and array
    - savePost and getPosts methods

 - inyect the dataService into home.page.ts component
*/
