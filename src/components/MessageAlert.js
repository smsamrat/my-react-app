import React from 'react'

function MessageAlert(props) {
  return (
    props.alert && <div className={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
        <strong>{props.alert.type}</strong> {props.alert.msg}
       
    </div>
  )
}

export default MessageAlert
