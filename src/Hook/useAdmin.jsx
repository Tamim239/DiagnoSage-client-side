import { useQuery } from "@tanstack/react-query"
import { useAxiosSecure } from "./useAxiosSecure"
import { useAuth } from "./useAuth"

export const useAdmin = () => {
 const {user} = useAuth()
 const axiosSecure = useAxiosSecure()
     console.log(user.email)
    const {data: isAdmin, isPending: isAdminLoading} = useQuery({
        queryKey: [user?.email, 'isAdmin'],
        queryFn: async()=>{
            const res = await axiosSecure.get(`/users/admin/${user?.email}`)
            console.log(res.data)
            return res.data;
        }
    })
    return [isAdmin, isAdminLoading]
}