import React from 'react';
import { useContext } from 'react';
import { AuthContext } from '../../../../Provider/AuthProvider';

const ChatNavbar = () => {
    const {user} = useContext(AuthContext);
    return (
        <div className='p-5'>
            <div className='flex items-center justify-between border-b-2 pb-5'>
            <div>
                <h2 className='text-xl font-semibold text-gray-600'>{user?.displayName}</h2>
            </div>
            <div className='relative'>
                <img className='w-14 h-14 rounded-full object-cover' src={user?.photoURL} alt="" />
                <div className='w-4 h-4 bg-green-500 rounded-full absolute -bottom-1 right-1'></div>
            </div>
        </div>
        </div>
    );
};

export default ChatNavbar;