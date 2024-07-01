import { NextApiRequest, NextApiResponse } from "next";
import toast from "react-hot-toast";

import prisma from '../../../libs/prismadb';

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {
    if(req.method !== 'GET'){
        return res.status(405).end();
    }

    try{
        const users = await prisma.user.findMany({
            orderBy: {
                createdAt: 'desc'
            }
        });

        return res.status(200).end(users);
    }catch(error){
        console.log(error);
        toast.error('Unexpected error occured.',{
            position: 'top-right',
            duration: 2000
        });

        //error response status..
        return res.status(400).end();
    }
}