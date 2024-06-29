import type { AppProps } from 'next/app'
import React from 'react'
import Layout from '../components/Layout';
import "../styles/global.css";

export default function App({ Component , pageProps }: AppProps){
    return (
        <div>
            <Layout>
                <Component {...pageProps} />
            </Layout>
        </div>
    )
}