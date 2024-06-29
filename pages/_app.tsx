import type { AppProps } from 'next/app'
import React from 'react'
import Layout from '../components/Layout';
import "../styles/global.css";
import ErrorBoundary from '../components/ErrorBoundary';
import LoginModal from '../components/modals/LoginModal';
import RegisterModal from '../components/modals/RegisterModal';
import {Toaster} from 'react-hot-toast';
import { SessionProvider } from 'next-auth/react';

export default function App({ Component , pageProps }: AppProps){
    return (
        <div>
            <ErrorBoundary>
                <SessionProvider session={pageProps.session}>
                    <Toaster/>
                    <RegisterModal/>
                    <LoginModal/> 
                    <Layout>
                        <Component {...pageProps} />
                    </Layout>
                </SessionProvider>
            </ErrorBoundary>
        </div>
    )
}