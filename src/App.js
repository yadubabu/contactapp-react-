import { useState,useEffect } from 'react';
import './App.css';
import {v4 as uuidv4} from 'uuid';
import AddContact from './components/AddContact';
import ContactList from './components/ContactList';
import Header from './components/Header';

function App() {
  const LOCAL_STORAGE_KEY='contacts';
  const [contacts,setContacts]=useState([]);

  const addContactHandler=(contact)=>{
    setContacts([...contacts,{id:uuidv4(),...contact}]);
  }

const removeContactHandler=(id)=>{
  const newContactList=contacts.filter(contact=>{
    return contact.id !== id;
  });
  setContacts(newContactList);
}

  useEffect(()=>{
      localStorage.setItem(LOCAL_STORAGE_KEY,JSON.stringify(contacts));
  },[contacts]);

  useEffect(()=>{
    const retreiveContacts=JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
    if(!retreiveContacts){
      return
    }
      setContacts(retreiveContacts);
},[]);


  
  return (
    <div className='ui container'>
        <Header /><br/>
        <br/>
        <AddContact addContactHandler={addContactHandler}/>
        <ContactList contacts={contacts} getContactId={removeContactHandler}/>
</div>
  );
}

export default App;
