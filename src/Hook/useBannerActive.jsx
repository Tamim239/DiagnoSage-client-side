import { useQuery } from "@tanstack/react-query"
import axios from "axios"

export const useBannerActive = () => {

    const {data, isLoading, refetch} = useQuery({
        queryKey: ['isActive'],
        queryFn: async()=>{
            const res = await axios.get(`${import.meta.env.VITE_API_URL}/isActive`)
            return res.data
        }
    })

  return {data, isLoading, refetch}
}
