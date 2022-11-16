import React from 'react';
import Dialogs from './components/Dialogs/Dialogs';
import Header from './components/Header/Header';
import NavBar from './components/NavBar/NavBar';
import Profile from './components/Profile/Profile';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import './App.css';

function App(props) {
  return (
    <BrowserRouter>
      <div className='AppBack'>
        <div className='App'>
          <Header />
          <NavBar />
          <div className='App-content'>
            <Routes>
              <Route
                path='/profile'
                element={
                  <Profile
                    postData={props.state.postsPage.postData}
                    newPostText={props.state.postsPage.newPostText}
                    dispatch={props.dispatch}
                  />
                }
              />
              <Route
                path='/messages'
                element={
                  <Dialogs
                    dialogData={props.state.dialogsPage.dialogData}
                    messageData={props.state.dialogsPage.messageData}
                    newMessageText={props.state.dialogsPage.newMessageText}
                    dispatch={props.dispatch}
                  />
                }
              />
            </Routes>
          </div>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
