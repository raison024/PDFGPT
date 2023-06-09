import React, { useEffect, useState } from 'react';
import DragAndDrop from './Upload_File.js';
import axios from 'axios';

function EachChat(props) {
  const [uploaded, setUploaded] = useState(false);
  const [msg, setMsg] = useState([]);
  const [title, setTitle] = useState('');

  useEffect(() => {
    axios.post('http://127.0.0.1:5000/access_messages/', { title: title })
      .then((response) => {
        if (response.data.success === true) {
          setMsg([...msg, ...response.data.chat]);
          props.cb2(); // No need to pass chatList.length as argument
        } else {
          alert('Failed in retrieving data');
        }
      })
      .catch((e) => {
        console.error(e);
      });
  }, []); // Empty dependency array to run the effect only once

  const onChatClick = () => {
    props.callback(uploaded, setUploaded, msg, setMsg);
    props.cb3(true);
  };

  return (
    <div
      onClick={onChatClick}
      style={{
        backgroundColor: '#C9C9C9',
        borderRadius: '25px',
        borderWidth: 0,
        height: 51.09623336791992,
        width: 172,
        left: 86,
        top: 888,
        borderRadius: 10,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        color: 'white',
        margin: '0 auto',
        marginTop: '10px',
        marginBottom: '10px',
        fontFamily: 'Euclid Circular A',
        fontSize: '18px',
        fontWeight: '500',
        lineHeight: '23px',
        letterSpacing: '0em',
        textAlign: 'center'
      }}
    >
      New Chat
    </div>
  );
}

export default EachChat;
