import React from 'react'
import style from './MyPosts.module.css'
import Post from './Post/Post'

const postData = [
  { message: 'Today I learned something new', id: '1', likeCount: '15 likes' },
  { message: 'Hey, How are you?', id: '2', likeCount: '19 likes' },
  { message: 'Very happy', id: '3', likeCount: '12 likes' },
]

function MyPosts() {
  return (
    <div>
      <div className={style.postsBclock}>
        <h3>My posts</h3>
        <div>
          <div>
            <textarea>What do you think?</textarea>
          </div>
          <div>
            <button>Add post</button>
          </div>
        </div>
      </div>
      <div className={style.posts}>
        <Post message={postData[0].message} likeCount={postData[0].likeCount} />
        <Post message={postData[1].message} likeCount={postData[1].likeCount} />
      </div>
    </div>
  )
}
export default MyPosts
