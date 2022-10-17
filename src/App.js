import React from 'react'
import './App.css'
import Dialogs from './components/Dialogs/Dialogs'
import Header from './components/Header/Header'
import NavBar from './components/NavBar/NavBar'
import Profile from './components/Profile/Profile'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App(props) {
  return (
    <BrowserRouter>
      <div className='AppBack'>
        <div className='App'>
          <Header />
          <NavBar />
          <div className='App-content'>
            <Routes>
              <Route path='/profile' element={<Profile postData = 
              {props.postData} 
              addNewPost = 
              {props.addNewPost} 
              newPostText = 
              {props.newPostText}
              updateNewPostText =
              {props.updateNewPostText} />} />
              <Route path='/messages' element={<Dialogs dialogData = {props.dialogData} messageData = {props.messageData} />} />
            </Routes>
          </div>
        </div>
      </div>
    </BrowserRouter>
  )
}

export default App
