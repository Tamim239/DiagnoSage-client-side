import { useQuery } from "@tanstack/react-query"
import { useAxiosPublic } from "./useAxiosPublic"

export const useTests = () => {
const axiosPublic = useAxiosPublic()
    const {data, isPending, refetch} = useQuery({
        queryKey: ['tests'],
        queryFn: async()=>{
            const res = await axiosPublic.get('/tests')
            return res.data
        }
    })

  return {data, isPending, refetch}
}
