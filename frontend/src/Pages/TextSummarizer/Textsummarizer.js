import React, { useState, useEffect, useRef } from 'react';
import './Textsummarizer.css';

function Textsummarizer() {
    const chatBoxRef = useRef(null);
    const messageInputRef = useRef(null);

    const [messages, setMessages] = useState([]);

    useEffect(() => {
        chatBoxRef.current.scrollTop = chatBoxRef.current.scrollHeight;
    }, [messages]);

    const addMessage = (message, isUserMessage) => {
        const messageClass = isUserMessage ? 'user-message' : 'bot-message';
        const newMessage = (
            <div key={messages.length} className={`mt-3 p-3 rounded ${messageClass}`}>
                {/* <img src={require('./Chatbot_images/userimgchatbot.png')} className="user-icon" alt="User Icon" /> */}
                <p>{message}</p>
            </div>
        );
        setMessages([...messages, newMessage]);
    };

    const sendMessage = () => {
        let message = messageInputRef.current.value.trim();

        if (message !== '') {
            addMessage(message, true);

            fetch('/chatbot', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ message }),
            })
                .then((response) => response.json())
                .then((data) => {
                    messageInputRef.current.value = '';
                    const botMessage = (
                        <div key={messages.length} className="mt-3 p-3 rounded bot-message">
                            {/* <img src={require('./Chatbot_images/lawyerimg.jpg')} className="bot-icon" alt="Bot Icon" /> */}
                            <p>{data.content}</p>
                        </div>
                    );
                    setMessages([...messages, botMessage]);
                })
                .catch((error) => console.error(error));
        }else{
            window.alert('Enter some data to summarize')
        }
    };

    const handleKeyDown = (event) => {
        if (event.keyCode === 13 && !event.shiftKey) {
            event.preventDefault();
            sendMessage();
        }
    };

    return (
        <div className="container mt-5">
            <h1>Text Summarizer</h1>
            <div className="chat-box mt-3" ref={chatBoxRef}>
                {messages}
            </div>
            <div className="form-group mt-3">
                <textarea className="form-control ta" rows="3" placeholder="Enter text here . . . " id="message-input" ref={messageInputRef} onKeyDown={handleKeyDown}></textarea>
                <div className='my-4 uploads'>
                    <label htmlFor="myfile" className='mx-4'><u>Select a file (only PDF/CSV/XML):</u></label>
                    <input type="file" accept="application/pdf,.csv, application/vnd.openxmlformats-officedocument.spreadsheetml.sheet, application/vnd.ms-excel" id="myfile" name="myfile" />
                </div>
            </div>
            <div>
                <button type="button" className="btn btn-primary my-4" id="send-btn" onClick={sendMessage}>Summarize Text</button>
                <button type="button" className="btn btn-primary my-4 mx-5" id="send-btn" onClick={sendMessage}>Summarize Doc</button>
            </div>
        </div>
    );
}

export default Textsummarizer;
