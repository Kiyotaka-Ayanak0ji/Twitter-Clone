import NextAuth from "next-auth/next";
import CredentialsProvider from "next-auth/providers/credentials";
import bcrypt from 'bcrypt'
import { PrismaAdapter } from '@next-auth/prisma-adapter';

import prisma from '../../../libs/prismadb'
import toast from "react-hot-toast";

export default NextAuth({
    adapter: PrismaAdapter(prisma),
    providers: [
        CredentialsProvider({
            name: 'credentials',
            credentials: {
                email: {label: 'email',type: 'text'},
                password: {label: 'password' , type: 'password'},
            },
            async authorize(credentials){
                if(!credentials?.email || !credentials?.password){
                    toast.error("Invalid Credentials",{
                        position: 'top-right',
                        duration: 2000
                    });
                    throw new Error("Invalid Credentials");
                }

                const user = await prisma.user.findUnique({
                    where: {
                        email: credentials.email
                    }
                });

                if(!user || !user?.hashedPassword){
                    toast.error("Invalid Credentials",{
                        position: 'top-right',
                        duration: 2000
                    });
                    throw new Error("Invalid Credentials");
                }

                const isCorrectPassword = await bcrypt.compare(
                    credentials.password,
                    user.hashedPassword
                );

                if(!isCorrectPassword){
                    toast.error("Invalid Credentials",{
                        position: 'top-right',
                        duration: 2000
                    });
                    throw new Error('Invalid Credentials');
                }

                return user;
            }
        })
    ],
    debug: process.env.NODE_ENV === 'development',
    session: {
        strategy: 'jwt'
    },
    jwt: {
        secret: process.env.NEXTAUTH_JWT_SECRET,
    },
    secret: process.env.NEXTAUTH_SECRET
})