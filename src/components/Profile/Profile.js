import React from 'react'
import MyPosts from './MyPosts/MyPosts'
import ProfileInfo from './MyPosts/ProfileInfo/ProfileInfo'
import style from './Profile.module.css'


function Profile(props) {
  return (
    <div>
      <ProfileInfo />
      <MyPosts postData = 
      {props.postData} 
      addNewPost = 
      {props.addNewPost} 
      newPostText = 
      {props.newPostText} 
      updateNewPostText = 
      {props.updateNewPostText} />
    </div>
  )
}
export default Profile
