import './App.css';
import logo from "./logo-64@3x.png";
import { useState, useEffect } from "react";
import Message from "./Message";
import { Button, FormControl, InputLabel, Input } from '@material-ui/core';
import db from './firebase';
import firebase from "firebase";
import FlipMove from "react-flip-move";
import SendIcon from '@material-ui/icons/Send';
import { IconButton } from '@material-ui/core';

function App() {
  // use state is basically a temperory memory
  const [input, setinput] = useState('');
  const [messages, setMessages] = useState([]);
  const [username, setUsername] = useState('');

  //use effect = run code on condition
  useEffect(() => {
    db.collection('messages').orderBy('timestamp', 'asc').onSnapshot(snapshot => {
      window.scrollTo(0, document.body.scrollHeight || document.documentElement.scrollHeight);

      setMessages(snapshot.docs.map(doc => ({ id: doc.id, message: doc.data() }))
      )
    }
    )
  }, []);
  // above code is said to be a listner code because of the database

  useEffect(() => {
    setUsername(prompt('Please add name'))
  }, [])


  const sendMessage = (Event) => {
    Event.preventDefault();
    //window.scrollTo(0, 999999999999);
    // all the logic to send messages
    db.collection('messages').add({
      message: input,
      username: username,
      timestamp: firebase.firestore.FieldValue.serverTimestamp()
    })
    //setMessages([...messages,{username:username,text:input}]);
    setinput('');


  }
  return (
    <div className="App">

    <div className="dimpy">
    <h1>FACEBOOK MESSENGER CLONE</h1>
      <h2>Welcome {username} </h2>
    <img src={logo} alt="" />
    <br/><br/><br/><br/><br/><br/><br/>
      
      
    </div>
     

      <FlipMove className="app_message">
        {
          messages.map(({ id, message }) => (
            <Message key={id} username={username} message={message} />

          ))
        }
      </FlipMove>

      
      {/* wrapping up in form makes the  
      input able to get send by the enter button 
      
      setting type =sumbit is important
      now when item get sumbit it gets refreshed always

      thats why we are using event.preventdefault
      to not refresh
      */}
      <form className="app_form">
        <FormControl className="app_formControl">
          <InputLabel htmlFor="my-input">Type your message</InputLabel>
          <Input  className="app_input" value={input} onChange={Event => setinput(Event.target.value)} />

          <IconButton className="app_iconButton" disabled={!input} variant="contained" color="primary" type="submit" onClick={sendMessage}
        >
          <SendIcon />
        </IconButton>

        </FormControl>
        

      </form>



    </div>
  );
}

export default App;
