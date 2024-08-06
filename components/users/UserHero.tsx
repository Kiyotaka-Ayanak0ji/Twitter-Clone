import Header from "../Header";
import useUser from "../../hooks/useUser";
import Avatar from "../Avatar";
import  { Image } from 'react-spinners'

interface UserHeroProps {
    userId: string
}

const UserHero:React.FC<UserHeroProps> = ({ userId }) => {
    const {data: fetchedUser} = useUser(userId);
    return (
    <div className="bg-neutral-700 h-44 relative">
        {fetchedUser?.coverImage && (
            <Image 
                src={fetchedUser} 
                fill
                alt ='Cover Img'
                style={{obj}}
            />
        )}
    </div>
  )
}

export default UserHero