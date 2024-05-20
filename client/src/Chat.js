import React, { useState } from 'react';
import axios from 'axios';
import './Chat.css';
// eslint-disable-next-line no-unused-vars
const Chat = () => {
    const [messages, setMessages] = useState([]);
    const [input, setInput] = useState('');
    const [orderId, setOrderId] = useState(null);
    const [step, setStep] = useState(0);

    const handleSend = async () => {
        const userMessage = { sender: 'user', text: input };
        setMessages([...messages, userMessage]);

        if (step === 0) {
            const botMessage = { sender: 'bot', text: 'Hi there! How can I help?' };
            setMessages([...messages, userMessage, botMessage]);
            setStep(1);
        } else if (step === 1) {
            const botMessage = { sender: 'bot', text: 'I apologise for the inconvenience. Could you please share the order ID with me?' };
            setMessages([...messages, userMessage, botMessage]);
            setStep(2);
        } else if (step === 2) {
            setOrderId(input);
            const botMessage = { sender: 'bot', text: 'Thank you for sharing the details. Allow me 2 minutes to check the status of your order.' };
            setMessages([...messages, userMessage, botMessage]);
            setInput('');
            setStep(3);

            // Simulate API call
            setTimeout(async () => {
                try {
                    const response = await axios.post('http://localhost:5000/chat', { query: 'order_status', orderId: input });
                    const botResponse = { sender: 'bot', text: response.data };
                    setMessages([...messages, userMessage, botMessage, botResponse]);
                } catch (error) {
                    console.error(`Error in handleSend: ${error.message}`);
                    const botError = { sender: 'bot', text: 'There was an error processing your request.' };
                    setMessages([...messages, userMessage, botMessage, botError]);
                }
            }, 2000);
        }
        setInput('');
    };

    return (
        <div className="chat-container">
            <div className="chat-window">
                {messages.map((msg, index) => (
                    <div key={index} className={`chat-message ${msg.sender}`}>
                        {msg.text}
                    </div>
                ))}
            </div>
            <input
                className="chat-input"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Type a message..."
            />
            <button className="chat-send-button" onClick={handleSend}>Send</button>
        </div>
    );
};

export default Chat;
