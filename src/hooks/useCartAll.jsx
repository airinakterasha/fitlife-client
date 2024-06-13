import { useQuery } from "@tanstack/react-query"
import useAxiosSecure from "./useAxiosSecure"

const useCartAll = () => {
    const axiosSecure = useAxiosSecure();
    //tan stack query
    const { data: cartAll=[], refetch} = useQuery({
      queryKey: ['cartAll'],
      queryFn: async () => {
        const res = await axiosSecure.get(`/carts`);
        return res.data;
      }
    })
    return [cartAll, refetch]
}

export default useCartAll