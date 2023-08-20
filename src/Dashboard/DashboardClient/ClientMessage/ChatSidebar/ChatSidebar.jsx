import React from 'react';
import ChatSearch from '../ChatSearch/ChatSearch';
import Chat from '../Chat/Chat';

const ChatSidebar = () => {
    return (
        <div className='p-10'>
            <ChatSearch />
            <Chat />
        </div>
    );
};

export default ChatSidebar;