import { useQuery } from '@tanstack/react-query';
import useAxiosPublic from './useAxiosPublic';
import useForums from './useForums';

const useForumDetails = () => {
    const [forums] = useForums();
    const axiosPublic = useAxiosPublic();
    const { data: forumDetails=[], isPending: loading} = useQuery({
        queryKey: ['forumDetails', forums._id],
        queryFn: async () => {
          const res = await axiosPublic.get(`/forum/${forums._id}`);
          return res.data;
        }
    })
    return [forumDetails, loading]
}

export default useForumDetails