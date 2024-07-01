import useSWR from 'swr'
import fetcher from '../libs/fetcher'

//Like redux it fetches the data and 
//decides whether to refetch the data..

//fetches a single user by id...

const useUser = (userId: string) => {
    const { 
        data , 
        error, 
        isLoading, 
        mutate 
    } = useSWR(userId ? `/api/users/${userId}` : null ,fetcher);

    return {
        data,
        error,
        isLoading,
        mutate
    }
}

export default useUser;