import { useRouter } from 'next/router';
import React, { useCallback } from 'react'
import { IconType } from 'react-icons/lib';
import useLoginModal from '../../hooks/useLoginModal';
import useCurrentUser from '../../hooks/useCurrentUser';

interface SidebarItemProps {
    label: string;
    icon: IconType;
    href?: string;
    auth?: boolean;
    onClick?: () => void
}

const SidebarItem: React.FC<SidebarItemProps> = ({
    label,
    href,
    icon: Icon,
    onClick,
    auth
}) => {
    
    const router = useRouter();
    const {data : createUser} = useCurrentUser();
    
    const loginModal = useLoginModal();
    
    const handleClick = useCallback(() => {
        if(onClick){
            return onClick();
        }

        if(auth && !currentUser){
            loginModal.onOpen();
        }

        if(href){
            router.push(href);
        }
    },[router,onClick,href,currentUser,auth,loginModal]);

    return (
        <div onClick={handleClick} className='flex flex-row item-center'>
            <div className='
            relative
            rounded-full
            h-14
            w-14
            flex
            items-center
            justify-center
            p-4
            hover:bg-slate-300
            hover:bg-opacity-10
            cursor-pointer
            lg:hidden'
            >
                <Icon size={26} color='white' />
            </div>

            <div className='
            relative 
            hidden
            lg:flex 
            item-row
            gap-4
            p-4
            hover:bg-slate-300
            hover:bg-opacity-10
            cursor-pointer
            '
            >
                <Icon size={24} color='white' />

                <p className='hidden lg:block text-xl'>
                    {label}
                </p>
            </div>
        </div>
    )
}

export default SidebarItem;