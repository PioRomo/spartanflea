"use client";
import React, { useState, useRef, useEffect } from 'react';
import MainLayout from "../layouts/MainLayout";

export default function Message() {
    const initialConversations = [
        {
            sender: 'John Doe',
            messages: [
                { id: 1, content: 'Hey, how are you?' },
                { id: 2, content: 'I\'m doing well too, thanks for asking!' }
            ]
        }
    ];

    const [conversations, setConversations] = useState(initialConversations);
    const [selectedConversationIndex, setSelectedConversationIndex] = useState(0);
    const [replyContent, setReplyContent] = useState('');
    const messagesEndRef = useRef(null);

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    };

    useEffect(() => {
        scrollToBottom();
    }, [selectedConversationIndex, conversations]);

    const handleConversationClick = (index) => {
        setSelectedConversationIndex(index);
        setReplyContent('');
    };

    const updateConversation = (index, newMessage) => {
        const updatedConversations = [...conversations];
        updatedConversations[index].messages.push(newMessage);
        setConversations(updatedConversations);
    };

    const handleReplySubmit = (e) => {
        e.preventDefault();
        if (replyContent.trim() === '') return;

        const newMessage = {
            id: conversations[selectedConversationIndex].messages.length + 1,
            sender: 'You',
            content: replyContent.trim()
        };
        updateConversation(selectedConversationIndex, newMessage);
        setReplyContent('');
    };

    const handleKeyDown = (e) => {
        if(e.key == 'Enter' && !e.shiftKey){
            e.preventDefault(); 
            handleReplySubmit(e); 
        }
    };

    const selectedConversation = conversations[selectedConversationIndex];

    return (
        <MainLayout>
            <div className="container mx-auto p-4 flex">
                <div className="w-1/3 pr-4 border-r">
                    <h1 className="text-2xl font-semibold mb-6">Conversations</h1>
                    <div className="divide-y divide-gray-300">
                        {conversations.map((conversation, index) => (
                            <div key={index} className="p-4 cursor-pointer" onClick={() => handleConversationClick(index)}>
                                <h2 className="text-lg font-semibold">{conversation.sender}</h2>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="w-2/3 pl-4">
                    <div className="message-container" style={{ maxHeight: '400px', overflowY: 'auto' }}>
                        {selectedConversation.messages.map(({ id, sender, content }) => (
                            <div key={id} className={`flex flex-col items-${sender === 'You' ? 'end' : 'start'} mb-4`}>
                                <div className={`rounded-lg p-3 ${sender === 'You' ? 'bg-gray-200 self-end' : 'bg-blue-500 text-white self-start'}`}>
                                    {content}
                                </div>
                            </div>
                        ))}
                        <div ref={messagesEndRef} />
                    </div>
                    <form onSubmit={(e) => handleReplySubmit(e)} className="mt-4">
                        <textarea
                            value={replyContent}
                            onChange={(e) => setReplyContent(e.target.value)}
                            onKeyDown={handleKeyDown}
                            placeholder="Type your message here..."
                            className="w-full p-3 border rounded-md focus:outline-none focus:ring focus:border-blue-500"
                        />
                        <button type="submit" className="mt-2 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600">Send</button>
                    </form>
                </div>
            </div>
        </MainLayout>
    );
}
