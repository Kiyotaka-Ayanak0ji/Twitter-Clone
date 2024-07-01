import useSWR from 'swr'
import fetcher from '../libs/fetcher'

//Like redux it fetches the data and 
//decides whether to refetch the data..
const useUsers = () => {
    const { 
        data , 
        error, 
        isLoading, 
        mutate 
    } = useSWR('/api/users',fetcher);

    return {
        data,
        error,
        isLoading,
        mutate
    }
}

export default useUsers;