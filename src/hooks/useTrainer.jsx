import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "./useAxiosPublic";

const useTrainer = () => {
    const axiosPublic = useAxiosPublic();
    const { data: betrainer=[], isPending: loading, refetch} = useQuery({
        queryKey: ['betrainer'],
        queryFn: async () => {
          const res = await axiosPublic.get(`/betrainer`);
          return res.data;
        }
      })
      return [betrainer, loading, refetch]
}

export default useTrainer


