import { useRouter } from 'next/router'
import React, { useCallback } from 'react'
import { BsTwitter } from 'react-icons/bs';
import useLoginModal from '../../hooks/useLoginModal';

const SidebarLogo = () => {
    const router = useRouter();
    const loginModal = useLoginModal();

    const onClick = useCallback(() => {
        console.log("Test");
        loginModal.onOpen();
    },[loginModal]);
    
    return (
        <div onClick={() => router.push('/')} 
        className='
            rounded-full
            h-14
            w-14 
            flex 
            items-center
            justify-center
            hover:bg-blue-300
            hover:bg-opacity-10
            cursor-pointer
            transition'
        >
            <BsTwitter onClick={onClick} size={30} color="white"/>
        </div>
  )
}

export default SidebarLogo;