import React from 'react'
import MyPosts from './MyPosts/MyPosts'
import ProfileInfo from './MyPosts/ProfileInfo/ProfileInfo'
import style from './Profile.module.css'
function Profile() {
  return (
    <div>
      <ProfileInfo />
      <MyPosts />
    </div>
  )
}
export default Profile