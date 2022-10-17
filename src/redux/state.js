import { rerenderEntireTree } from "../render"

let state = {

    postsPage :{
        postData : [
            { message: 'Today I learned something new', id: '1', likeCount: '15 likes' },
            { message: 'Hey, How are you?', id: '2', likeCount: '19 likes' },
            { message: 'Very happy', id: '3', likeCount: '12 likes' },
          ],
          newPostText : 'What do you think?',
    },
    dialogsPage : {
        messageData : [
            { message: 'Hey' },
            { message: 'How are you?' },
            { message: 'Thanks' },
          ],          
        dialogData : [
            { name: 'Sam', id: '1' },
            { name: 'Victor', id: '2' },
            { name: 'Alena', id: '3' },
          ]
    },
}
window.state = state

export let addNewPost = () =>{

  let newPost ={
    message: state.postsPage.newPostText,
    id: 4,
    likeCount: '0 likes'

  } 
  state.postsPage.postData.push(newPost)
  state.postsPage.newPostText = ''
  rerenderEntireTree(state)
}

export let updateNewPostText = (newText) =>{
  state.postsPage.newPostText = newText
  rerenderEntireTree(state)
}

export default state