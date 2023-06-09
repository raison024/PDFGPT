import React, { useEffect, useState } from 'react';
import EachChat from './EachChat';
import '../index.css';

function ChatHistoryList(props) {
  const [chatList, setChatList] = useState([]); 
  const [thisIndex, setThisIndex] = useState(0);
  const [name, setName] = useState(props.cbName);

  useEffect(() => {
    if (name !== '') {
      addName(chatList, thisIndex, name);
      setName('');
    }
  }, [name, chatList, thisIndex]);

  const addName = (chatList, thisIndex, name) => {
    const updatedChatList = [...chatList];
    updatedChatList[thisIndex] = { ...updatedChatList[thisIndex], name }; // Update the name property
    setChatList(updatedChatList);
  };

  const addNewChat = () => {
    setChatList([
      ...chatList,
      {
        id: chatList.length + 1, // Use a unique identifier instead of the index
        name: '',
      },
    ]);
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', height: '100%', backgroundColor: '#E6E6E6' }}>
      <div style={{ flex: 1, overflowY: 'auto', maxHeight: 'calc(100% - 51.09623336791992px)' }}>
        {chatList.map((chat) => (
          <EachChat
            key={chat.id} // Use the unique identifier as the key prop
            callback={props.callback}
            cb2={() => setThisIndex(chat.index)}
            cb3={props.setBoot}
            chatList={chatList}
          />
        ))}
      </div>
      <button
        onClick={addNewChat}
        style={{
          backgroundColor: '#458FF6',
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
          marginTop: '30px',
          marginBottom: '30px',
          fontFamily: 'Euclid Circular A',
          fontSize: '18px',
          fontWeight: '500',
          lineHeight: '23px',
          letterSpacing: '0em',
          textAlign: 'center',
        }}
      >
        <div className="circle"></div>
        New Chat
      </button>
    </div>
  );
}

export default ChatHistoryList;
