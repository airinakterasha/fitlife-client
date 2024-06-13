import useAxiosPublic from './useAxiosPublic';
import { useQuery } from '@tanstack/react-query';

const useForums = () => {
    const axiosPublic = useAxiosPublic();
    const { data: forums=[], isPending: loading, refetch} = useQuery({
        queryKey: ['forums'],
        queryFn: async () => {
          const res = await axiosPublic.get(`/forum`);
          return res.data;
        }
    })
    return [forums, loading, refetch]
}

export default useForums