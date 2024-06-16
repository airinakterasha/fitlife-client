import { useQuery } from "@tanstack/react-query"
import useAxiosPublic from "./useAxiosPublic";
import useAuth from "./useAuth";

const useUserSingle = () => {
    const {user} = useAuth()
    const axiosPublic = useAxiosPublic();
    //tan stack query
    const { data: singleuser={}, isPending: loading, error} = useQuery({
        queryKey: ['singleuser', user?.email],
        queryFn: async () => {
            const res = await axiosPublic.get(`/allusers/${user?.email}`);
            return res.data;
        }
    })
    return {singleuser, loading, error}
}

export default useUserSingle