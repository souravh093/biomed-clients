import { Avatar } from '@mui/material';
import React from 'react';

const SidebarChat = () => {
    return (
        <div className='flex p-[20px] cursor-pointer border-b-2 border-[#f6f6f6] hover:bg-[#ebebeb]' >
            <Avatar></Avatar>
            <div className='ml-[15px]'>
                <h2 className='text-basen font-bold'>Room name</h2>
                <p>This is the last message</p>
            </div>
        </div>
    );
};

export default SidebarChat;