"use client";
import React, { useState } from 'react';
import MainLayout from "../layouts/MainLayout";

export default function Message() {
    const initialMessages = [
        { id: 1, sender: 'John Doe', content: 'Hey, how are you?' },
        { id: 2, sender: 'Jane Doe', content: 'Hi! I\'m good, how about you?' },
        { id: 3, sender: 'John Doe', content: 'I\'m doing well too, thanks for asking!' },
    ];

    const [messages, setMessages] = useState(initialMessages);
    const [replyContent, setReplyContent] = useState('');

    const handleReplySubmit = (e, sender) => {
        e.preventDefault();
        if (replyContent.trim() === '') return;

        const newMessage = {
            id: messages.length + 1,
            sender: 'You',
            content: replyContent.trim()
        };

        const updatedMessages = [...messages];
        updatedMessages.push(newMessage);
        setMessages(updatedMessages);
        setReplyContent('');
    };

    return (
        <MainLayout>
            <div className="container mx-auto p-4 flex">
                <div className="w-1/3 pr-4 border-r">
                    <h1 className="text-2xl font-semibold mb-6">Conversations</h1>
                    <div className="divide-y divide-gray-300">
                        {initialMessages.map(({ sender, content }) => (
                            <div key={sender} className="p-4 cursor-pointer" onClick={() => setReplyContent('')}>
                                <h2 className="text-lg font-semibold">{sender}</h2>
                                <p className="text-gray-500">{content.substring(0, 50)}{(content.length > 50 ? '...' : '')}</p>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="w-2/3 pl-4">
                    <div>
                        {messages.map(({ id, sender, content }) => (
                            <div key={id} className={`flex flex-col items-${sender === 'You' ? 'end' : 'start'} mb-4`}>
                                <div className={`rounded-lg p-3 ${sender === 'You' ? 'bg-gray-200 self-end' : 'bg-blue-500 text-white self-start'}`}>
                                    {content}
                                </div>
                            </div>
                        ))}
                        <form onSubmit={(e) => handleReplySubmit(e)} className="mt-4">
                            <textarea
                                value={replyContent}
                                onChange={(e) => setReplyContent(e.target.value)}
                                placeholder="Type your message here..."
                                className="w-full p-3 border rounded-md focus:outline-none focus:ring focus:border-blue-500"
                            />
                            <button type="submit" className="mt-2 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600">Send</button>
                        </form>
                    </div>
                </div>
            </div>
        </MainLayout>
    );
}
