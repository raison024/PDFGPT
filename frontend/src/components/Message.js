import React from 'react';

const Message = ({ text, type }) => {
  const isSender = type === 'sender';
  const styles = getStyles(isSender);

  return (
    <div style={styles.container}>
      <div style={styles.message}>
        {text}
      </div>
    </div>
  );
}

const getStyles = (isSender) => {
    const containerStyle = {
      display: 'flex',
      justifyContent: isSender ? 'flex-end' : 'flex-start',
      marginBottom: 10,
    };

    const messageStyle = {
      backgroundColor: isSender ? '#4c8bf5' : '#eaeaea',
      color: isSender ? 'white' : 'black',
      padding: '10px 15px',
      borderRadius: 20,
      borderTopRightRadius: isSender ? 5 : 20,
      borderTopLeftRadius: isSender ? 20 : 5,
      maxWidth: '70%',
      wordWrap: 'break-word',
      maxWidth: '300px', // added maxWidth property
    };

    return {
      container: containerStyle,
      message: messageStyle,
    };
  };


export default Message;
