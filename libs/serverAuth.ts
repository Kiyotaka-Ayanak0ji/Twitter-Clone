import { NextApiRequest } from "next";
import { getSession } from "next-auth/react";
import { toast } from "react-hot-toast";

const serverAuth = async (req: NextApiRequest) => {
    const session = await getSession({req});

    if(!session?.user?.email){
        toast.error("Not Signed In",{
            position: 'top-right',
            duration: 2000
        })
        throw new Error("Not Signed In");
    }

    const currentUser = await prisma.user.findUnique({
        where: {
            email: session.user.email
        }
    });

    if(!currentUser){
        toast.error("Not Signed In",{
            position: 'top-right',
        })
        throw new Error("Not Signed In");
    }

    return { currentUser };
}

export default serverAuth;