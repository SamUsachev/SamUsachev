import React from 'react';
import style from './MyPosts.module.css';
import Post from './Post/Post';
import {
  addNewPostActionCreator,
  updateNewPostTextActionCreator,
} from '../../../redux/profileReducer';

function MyPosts(props) {
  let postElements = props.postData.map((p) => (
    <Post message={p.message} likeCount={p.likeCount} />
  ));

  let newPost = React.useRef();

  let addNewPost = () => {
    props.dispatch(addNewPostActionCreator());
  };

  let onPostChange = () => {
    let text = newPost.current.value;
    let action = updateNewPostTextActionCreator(text);
    props.dispatch(action);
  };
  return (
    <div>
      <div className={style.postsBclock}>
        <h3>My posts</h3>
        <div>
          <div>
            <textarea
              onChange={onPostChange}
              ref={newPost}
              value={props.newPostText}
            />
          </div>
          <div>
            <button className={style.but} onClick={addNewPost}>
              Add post
            </button>
          </div>
        </div>
      </div>
      <div className={style.posts}>{postElements}</div>
    </div>
  );
}
export default MyPosts;
