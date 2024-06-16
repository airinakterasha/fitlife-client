import { useQuery } from "@tanstack/react-query"
import useAxiosPublic from "./useAxiosPublic";



const useUsers = () => {
    const axiosPublic = useAxiosPublic;
    //tan stack query
    const { data: allusers=[]} = useQuery({
        queryKey: ['allusers'],
        queryFn: async () => {
        const res = await axiosPublic.get(`/allusers`);
        return res.data;
        }
    })
    return [allusers]
  
}

export default useUsers