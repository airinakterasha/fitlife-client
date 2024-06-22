import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "./useAxiosPublic";

const useTestimonials = () => {
    const axiosPublic = useAxiosPublic();
    const { data: testimonials=[], isPending: loading, refetch} = useQuery({
        queryKey: ['testimonials'],
        queryFn: async () => {
          const res = await axiosPublic.get(`/review`);
          return res.data;
        }
      })
      return [testimonials, loading, refetch]
}

export default useTestimonials