import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "./useAxiosPublic";
import useAuth from "./useAuth";

const useTrainerByEmail = () => {
    const {user} = useAuth();
    const axiosPublic = useAxiosPublic();
    const { data: trainerOne=[], isPending: loading, refetch} = useQuery({
        queryKey: ['trainerOne'],
        queryFn: async () => {
          const res = await axiosPublic.get(`/trainer/${user.email}`);
          return res.data;
        }
      })
      return [trainerOne, loading, refetch]
}

export default useTrainerByEmail

