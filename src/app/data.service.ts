import { Post } from './post';
import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection} from 'angularfire2/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { firestore } from 'firebase';


@Injectable({
  providedIn: 'root'
})
export class DataService {
  private posts: Observable<Post[]>;

  postCollection: AngularFirestoreCollection<Post>;

  constructor(private db: AngularFirestore) {

    this.postCollection = db.collection<Post>('posts');
    this.retrievePostFromDB();
  }

    // read the data and create the subscription
    private retrievePostFromDB() {
    this.posts = this.postCollection.snapshotChanges().pipe(
      map(actions => {
         return actions.map( a => {
            let  data = a.payload.doc.data();
            const  id = a.payload.doc.id;
            const d: any = data.date;
            data.date = new firestore.Timestamp(
              d.seconds,
              d.nanoseconds
            ).toDate();
            return {id, ...data};
         });
      })
    ); 
  }

  // saves the post
  public savePost(post: Post) {
    let item = Object.assign({}, post); // convert
    this.postCollection.add(item);  // store on database
  }

  // returns all the posts
  public getPosts() {
    this.retrievePostFromDB();
    return this.posts;
  }
}