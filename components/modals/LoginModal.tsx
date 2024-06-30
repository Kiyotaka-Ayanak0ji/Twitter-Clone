import React, { useCallback, useState } from 'react'
import useLoginModal from '../../hooks/useLoginModal'
import Input from '../layouts/input';
import Modal from '../layouts/Modal';
import useRegisterModal from '../../hooks/useRegisterModal';
import { signIn } from 'next-auth/react';

const LoginModal = () => {
    const loginModal = useLoginModal();
    const registerModal = useRegisterModal();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isloading, setIsLoading] = useState(false);

    const onToggle = useCallback(() => {
        if(isloading){
            return;
        }
        loginModal.onClose();
        registerModal.onOpen();
        
    },[isloading,loginModal,registerModal]);

    const onSubmit = useCallback(async () => {
        try {
            setIsLoading(true);

            //TODO ADD LOG IN..
            await signIn('credentials',{
                email,
                password
            });

            loginModal.onClose();
        } catch (error) {
            console.log(error);
        }
        finally {
            setIsLoading(false);
        }
    }, [loginModal,email,password]);

    const bodyContent = (
        <div className='flex flex-col gap-4'>
            <Input
                placeholder='Email'
                onChange={(e) => setEmail(e.target.value)}
                value={email}
                disabled={isloading}
            />
            <Input
                placeholder='Password'
                onChange={(e) => setPassword(e.target.value)}
                value={password}
                disabled={isloading}
            />
        </div>
    )

    const footerContent = (
        <div className='text-neutral-400 text-center mt-4'>
            <p>
                New Here ?
            </p>
            <span 
                className='hover:underline 
                text-green-500
                font-semibold
                cursor-pointer'
                onClick={onToggle}
            >
                Sign Up
            </span>
        </div>
    );

    return (
        <Modal
            disabled={isloading}
            isOpen={loginModal.isOpen}
            title='Login'
            actionLabel='Sign In'
            onClose={loginModal.onClose}
            onSubmit={onSubmit}
            body={bodyContent}
            footer={footerContent}
        />
    )
}

export default LoginModal;