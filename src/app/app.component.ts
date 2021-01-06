import { Component } from '@angular/core';

import {Store} from '@ngrx/store';
import {Observable} from 'rxjs';

import {Post} from './interfaces/post.interface';
import * as PostActions from './actions/post.actions';

interface AppState { // TODO: move this to the interfaces folder
  post: Post;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  post: Observable<Post>;
  text: string;

  constructor(private store: Store<AppState>) {
    this.post = this.store.select('post');
  }

  editText(): void {
    this.store.dispatch(new PostActions.EditText(this.text));
  }

  resetPost(): void {
    this.store.dispatch(new PostActions.Reset());
  }

  upvote(): void {
    this.store.dispatch(new PostActions.Upvote());
  }

  downvote(): void {
    this.store.dispatch(new PostActions.Downvote());
  }

}
