import { useQuery } from "@tanstack/react-query"
import axios from "axios"

export const useBookListAll = () => {

    const {data, isPending, refetch} = useQuery({
        queryKey: ['bookListALl'],
        queryFn: async()=>{
            const res = await axios.get(`${import.meta.env.VITE_API_URL}/bookList`)
            return res.data
        }
    })

  return {data, isPending, refetch}
}
