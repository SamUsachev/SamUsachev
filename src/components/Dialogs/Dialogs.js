import React from 'react';
import { NavLink } from 'react-router-dom';
import {
  sendMessageActionCreator,
  updateNewMessageActionCreator,
} from '../../redux/dialogsReducer';
import style from './Dialogs.module.css';

const Dialog = (props) => {
  return (
    <div className={style.people + '' + style.active}>
      <NavLink to={'/dialogs/' + props.id}>{props.name}</NavLink>
    </div>
  );
};

let Message = (props) => {
  return <div>{props.message}</div>;
};

const Dialogs = (props) => {
  const dialogElements = props.dialogData.map((d) => (
    <Dialog name={d.name} id={d.id} />
  ));

  let messageElements = props.messageData.map((m) => (
    <Message message={m.message} id={m.id} />
  ));
  let newMessageText = props.newMessageText;

  const sendMessageClick = () => {
    props.dispatch(sendMessageActionCreator());
  };
  const newMessageChange = (e) => {
    let body = e.target.value;
    props.dispatch(updateNewMessageActionCreator(body));
  };

  return (
    <div className={style.dialogs}>
      <div className={style.dialogsPeople}>{dialogElements}</div>
      <div className={style.messages}>
        <div>{messageElements}</div>
        <div>
          <textarea
            value={newMessageText}
            onChange={newMessageChange}
            placeholder='Enter your message'
          ></textarea>
        </div>
        <div>
          <button onClick={sendMessageClick}>Send</button>
        </div>
      </div>
    </div>
  );
};
export default Dialogs;
