import { useQuery } from "@tanstack/react-query"
import axios from "axios"
import { useAuth } from "./useAuth"

export const useUserInfo = () => {
 const {user} = useAuth();
    const {data, isPending, refetch} = useQuery({
        queryKey: ['userInfo', user?.email],
        queryFn: async()=>{
            const res = await axios.get(`http://localhost:5000/users/${user?.email}`)
            return res.data
        }
    })

  return {data, isPending, refetch}
}
