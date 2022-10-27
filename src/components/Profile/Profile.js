import React from 'react';
import MyPosts from './MyPosts/MyPosts';
import ProfileInfo from './MyPosts/ProfileInfo/ProfileInfo';
import style from './Profile.module.css';

function Profile(props) {
  return (
    <div>
      <ProfileInfo />
      <MyPosts
        postData={props.postData}
        dispatch={props.dispatch}
        newPostText={props.newPostText}
      />
    </div>
  );
}
export default Profile;
