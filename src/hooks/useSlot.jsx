import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "./useAxiosPublic";

const useSlot = () => {
    const axiosPublic = useAxiosPublic();
    const { data: slots=[], isPending: loading, refetch} = useQuery({
        queryKey: ['slots'],
        queryFn: async () => {
          const res = await axiosPublic.get(`/slot`);
          return res.data;
        }
    })
    return [slots, loading, refetch]
}

export default useSlot