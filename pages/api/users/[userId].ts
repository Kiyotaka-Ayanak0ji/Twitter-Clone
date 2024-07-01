import { NextApiRequest, NextApiResponse } from "next";
import toast from "react-hot-toast";
import prisma from '../../../libs/prismadb'

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
){
    if(req.method !== 'GET'){
        return res.status(405).end();
    }

    try{
        const { userId } = req.query;
        
        if(!userId || typeof userId !== 'string'){
            throw new Error('Invalid ID');
        }

        const existingUser = await prisma.user.findUnique({
            where:{
                id: userId
            }
        });

        const followersCount = await prisma.user.count({
            where: {
                followingIds:{
                    has: userId
                }
            }
        });


        return res.status(200).json({ ...existingUser , followersCount })
    }catch(error){
        console.log(error);
        toast.error('Error fetching current user',{
            position: 'top-right',
            duration: 2000
        });

        return res.status(400).end();
    }
}