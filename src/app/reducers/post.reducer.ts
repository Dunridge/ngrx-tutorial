import * as PostActions from '../actions/post.actions';
import {Post} from '../interfaces/post.interface';

export type Action = PostActions.All;


const defaultState: Post = {
  text: 'Hello, I\'m the default post',
  likes: 0
};

// each state object is immutable so we need to do this:
const newState = (state, newData) => Object.assign({}, state, newData);

// build a reducer
export function postReducer(state: Post = defaultState, action: Action): object {
  console.log(action.type, state);

  switch (action.type) {
    case PostActions.EDIT_TEXT: {
      return newState(state, {text: action.payload});
    }

    case PostActions.UPVOTE: {
      return newState(state, {likes: state.likes + 1});
    }

    case PostActions.DOWNVOTE: {
      return newState(state, {likes: state.likes - 1});
    }

    case PostActions.RESET: {
      return defaultState;
    }

    default: {
      return state;
    }
  }
}
