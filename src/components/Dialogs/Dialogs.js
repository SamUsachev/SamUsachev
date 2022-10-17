import React from 'react'
import { NavLink } from 'react-router-dom'
import style from './Dialogs.module.css'

const Dialog = (props) => {
  return (
    <div className={style.people + '' + style.active}>
      <NavLink to={'/dialogs/' + props.id}>{props.name}</NavLink>
    </div>
  )
}

const Message = (props) => {
  return <div>{props.message}</div>
}


function Dialogs(props) {
  
  const dialogElements  = props.dialogData.map((d)=> <Dialog name={d.name} id={d.id} /> )

  const messageElements = props.messageData.map((m) => <Message message={m.message} />)

  return (
    <div className={style.dialogs}>
      <div className={style.dialogsPeople}>

        {dialogElements}

      </div>
      <div className={style.messages}>

        {messageElements}
        
      </div>
    </div>
  )
}
export default Dialogs
