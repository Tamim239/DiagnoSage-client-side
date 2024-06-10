import { useQuery } from "@tanstack/react-query";
import axios from "axios";

export const useAllUser = () => {

    const {data, isPending, refetch} = useQuery({
        queryKey: ['usersAll'],
        queryFn: async()=>{
            const res = await axios.get(`${import.meta.env.VITE_API_URL}/users`)
            return res.data
        }
    })

  return {data, isPending, refetch}
}
