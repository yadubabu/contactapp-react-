import React from 'react';


const ContactCard = (props) => {
    const {id,name,email}=props.contact;
    console.log(id);
  return (
    <div className='item' >
        <div className='content' key={id}>
            <div className='header'>{name}</div>
            <div>{email}</div>
        </div>
        <i style={{color:'red',marginTop:'7px'}} className='trash alternate outline icon right floated'
        onClick={()=>props.clickHandler(id)}></i>
    </div>
  )
}

export default ContactCard;