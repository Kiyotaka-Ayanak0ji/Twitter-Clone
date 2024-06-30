import { useRouter } from 'next/router';
import React, { useCallback } from 'react'
import { IconType } from 'react-icons/lib';

interface SidebarItemProps {
    label: string;
    icon: IconType;
    href?: string;
    onClick?: () => void
}

const SidebarItem: React.FC<SidebarItemProps> = ({
    label,
    href,
    icon: Icon,
    onClick
}) => {
    const router = useRouter();
    const handleClick = useCallback(() => {
        if(onclick){
            return onClick();
        }
        if(href){
            router.push(href);
        }
    },[router,onClick,href]);

    return (
        <div onClick={() => handleClick()} className='flex flex-row item-center'>
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
                <Icon size={26} href={href} color='stone-900' />
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
                <Icon size={24} href={href} color='stone-900' />

                <p className='hidden lg:block text-xl'>
                    {label}
                </p>

            </div>
        </div>
    )
}

export default SidebarItem;