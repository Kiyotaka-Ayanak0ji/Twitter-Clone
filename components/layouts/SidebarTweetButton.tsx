import { useRouter } from 'next/router';
import React, { useCallback } from 'react';
import { FaFeather} from 'react-icons/fa';
import useLoginModal from '../../hooks/useLoginModal';
import useCurrentUser from '../../hooks/useCurrentUser';

const SidebarTweetButton = () => {
    const router = useRouter();
    const loginModal = useLoginModal();
    
    //Fetch is current user session is active..
    const { data: currentUser } = useCurrentUser();

    const handleAuth = useCallback(() => {
        if(currentUser){
            return null;
        }
        console.log("Test");
        loginModal.onOpen();
    },[loginModal,currentUser]);

    return (
        <div onClick={() => router.push('/')}>
            <div 
                className='
                    mt-6
                    lg:hidden 
                    rounded-full
                    h-14
                    w-14
                    flex
                    items-center
                    justify-center
                    p-4
                    bg-sky-500
                    hover:bg-opacity-10
                    transition
                    cursor-pointer'
            >
                <FaFeather onClick={() => handleAuth()} size={24} color='white' />
            </div>
            {/* Desktop */}
            <div 
                className='
                mt-6
                hidden
                lg:block
                px-4
                py-2
                rounded-full
                bg-sky-500
                hover:bg-sky-700
                transition
                cursor-pointer'
                >
                    <p className='
                        hidden
                        lg:block 
                        text-white
                        text-center
                        font-semibold
                        text-[20px]'
                        onClick={() => handleAuth()}>
                            Tweet
                    </p>
                </div>
        </div>
    )
}

export default SidebarTweetButton;