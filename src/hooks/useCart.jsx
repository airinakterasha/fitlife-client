import { useQuery } from "@tanstack/react-query"
import useAxiosSecure from "./useAxiosSecure"
import useAuth from "./useAuth";


const useCart = () => {
  const axiosSecure = useAxiosSecure();
  const {user} = useAuth();
  //tan stack query
  //console.log(user?.email);
  const { data: cart=[], refetch} = useQuery({
    queryKey: ['cart', user?.email],
    queryFn: async () => {
      const res = await axiosSecure.get(`/cart?email=${user.email}`);
      //console.log(res.data);
      return res.data;
    }
  })
  return [cart, refetch]
}

export default useCart