import React from 'react'
import { NavLink } from 'react-router-dom'
import style from './Dialogs.module.css'

const Dialog = (props) => {
  return (
    <div className={style.people + ' ' + style.active}>
      <NavLink to={'/dialogs/' + props.id}>{props.name}</NavLink>
    </div>
  )
}

const Message = (props) => {
  return <div>{props.message}</div>
}

const dialogData = [
  { name: 'Sam', id: '1' },
  { name: 'Victor', id: '2' },
  { name: 'Alena', id: '3' },
]
const messageData = [
  { message: 'Hey' },
  { message: 'How are you?' },
  { message: 'Thanks' },
]

function Dialogs() {
  return (
    <div className={style.dialogs}>
      <div className={style.dialogsPeople}>
        <Dialog name={dialogData[0].name} id={dialogData[0].id} />
        <Dialog name={dialogData[1].name} id={dialogData[1].id} />
        <Dialog name={dialogData[2].name} id={dialogData[2].id} />
      </div>
      <div className={style.messages}>
        <Message message={messageData[0].message} />
        <Message message={messageData[1].message} />
        <Message message={messageData[2].message} />
      </div>
    </div>
  )
}
export default Dialogs
