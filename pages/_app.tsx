import type { AppProps } from 'next/app'
import React from 'react'
import Layout from '../components/Layout';
import "../styles/global.css";
import RegisterModal from '../components/modals/RegisterModal';
import LoginModal from '../components/modals/LoginModal';
import { SessionProvider } from 'next-auth/react';
import { Toaster } from 'react-hot-toast';

export default function App({ Component , pageProps }: AppProps){
    return (
        <div>
            <SessionProvider session={pageProps.session}>
                {/* <Toaster/> */}
                <RegisterModal/>
                <LoginModal/>
                <Layout>
                    <Component {...pageProps} />
                </Layout>
            </SessionProvider>
        </div>
    )
}