import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "./useAxiosPublic";


const useClass = () => {
    const axiosPublic = useAxiosPublic();
    const { data: classesall=[], isPending: loading, refetch} = useQuery({
        queryKey: ['classesall'],
        queryFn: async () => {
          const res = await axiosPublic.get(`/class`);
          return res.data;
        }
    })
    return [classesall, loading, refetch]
}

export default useClass