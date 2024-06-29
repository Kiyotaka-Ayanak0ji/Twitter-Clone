import { NextApiRequest,NextApiResponse } from "next";
import toast from "react-hot-toast";

export default function handler(
    req: NextApiRequest,
    res: NextApiResponse
){
    if(req.method != 'GET'){
        return res.status(405).end();
    }

    try{
        const { userId } = req.query;

        if(!userId || typeof userId !== 'string'){
            toast.error('Invalid toast ID',{
                position: 'top-right',
                duration: 5000
            });
        }
        
    }catch(error){
        return res.status(400).end();
    }
}