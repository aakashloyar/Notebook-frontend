import React,{useState} from 'react'

export default function Alert(props) {
  const capitalize=(word)=>{
    const lower=word.toLowerCase();
    return lower.charAt(0).toUpperCase()+lower.slice(1);
  }
  return (
    // <div>
     
      props.alert  && <div className={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
        {/* <strong>Holy guacamole!</strong> You should check in on some of those fields below. */}
        <strong> {capitalize(props.alert.type)}</strong>  {props.alert.msg}
        {/* <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button> //button to delete alert*/ }
      </div>
    //</div>
  )
}