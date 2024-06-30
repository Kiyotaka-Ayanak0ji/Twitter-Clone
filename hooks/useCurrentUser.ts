import useSWR from 'swr'
import fetcher from '../libs/fetcher'

//Like redux it fetches the data and 
//decides whether to refetch the data..
const useCurrentUser = () => {
    const { data , error, isLoading, mutate } = useSWR('/api/current',fetcher);

    return {
        data,
        error,
        isLoading,
        mutate
    }
}

export default useCurrentUser;