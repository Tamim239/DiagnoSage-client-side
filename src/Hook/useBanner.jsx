import { useQuery } from "@tanstack/react-query"
import { useAxiosSecure } from "./useAxiosSecure"

export const useBanner = () => {
const axiosSecure = useAxiosSecure()
    const {data, isLoading, refetch} = useQuery({
        queryKey: ['banners'],
        queryFn: async()=>{
            const res = await axiosSecure.get('/banners')
            return res.data
        }
    })

  return {data, isLoading, refetch}
}
