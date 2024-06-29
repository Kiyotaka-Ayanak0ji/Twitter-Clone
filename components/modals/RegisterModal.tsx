import React, { useCallback, useState } from 'react'
import Input from '../layout/input';
import Modal from '../layout/Modal';
import useLoginModal from '../../hooks/useLoginModal';
import useRegisterModal from '../../hooks/useRegisterModal';
import axios from 'axios';
import { toast } from 'react-hot-toast';

const RegisterModal = () => {
    const loginModal = useLoginModal();
    const registerModal = useRegisterModal();

    const [email, setEmail] = useState('');
    const [name, setName] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [isloading, setIsLoading] = useState(false);

    const onToggle = useCallback(() => {
        if(isloading){
            return;
        }
      
        registerModal.onClose()
        loginModal.onOpen();
        
    },[isloading,registerModal,loginModal]);
    
    const onSubmit = useCallback(async () => {
        try {
            setIsLoading(true);
            
            //TODO ADD REGISTER AND LOG IN..
            await axios
            
            await axios.post('/api/register',{
                email,
                password,
                username,
                name
            });

            toast.success("Account created.",{
                position: "top-right",
                duration: 5000
            })

            registerModal.onClose();
        } catch (error) {
            console.log(error);
            toast.error("Something went wrong",{
                position: "top-right",
                duration: 5000
            })
        }
        finally {
            setIsLoading(true);
        }
    }, [registerModal,email,password,username,name]);

    const bodyContent = (
        <div className='flex flex-col gap-4'>
            <Input
                placeholder='Email'
                onChange={(e) => setEmail(e.target.value)}
                value={email}
                disabled={isloading}
            />
            <Input
                placeholder='Name'
                onChange={(e) => setName(e.target.value)}
                value={name}
                disabled={isloading}
            />
            <Input
                placeholder='Username'
                onChange={(e) => setUsername(e.target.value)}
                value={username}
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
                Already a user ? 
                <span
                    className='text-green-500 
                    cursor-pointer 
                    hover:underline 
                    font-semibold'
                    onClick={onToggle}
                >
                        Sign In
                </span>
            </p>
        </div>
    )

    return (
        <Modal
            disabled={isloading}
            isOpen={registerModal.isOpen}
            title='Create an Account'
            actionLabel='Register'
            onClose={registerModal.onClose}
            onSubmit={onSubmit}
            body={bodyContent}
            footer={footerContent}
        />
    )
}

export default RegisterModal;