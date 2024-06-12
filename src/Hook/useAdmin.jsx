import { useQuery } from "@tanstack/react-query"
import { useAuth } from "./useAuth"
import { useAxiosSecure } from "./useAxiosSecure"

export const useAdmin = () => {
 const axiosSecure = useAxiosSecure()
 const {user} = useAuth();
     console.log(user?.email)
    const {data: isAdmin, isPending: isAdminLoading} = useQuery({
        queryKey: [user?.email, 'isAdmin'],
        enabled: !!user?.email,
        queryFn: async()=>{
            const res = await axiosSecure.get(`/users/admin/${user?.email}`)
            console.log(res.data.admin)
            return res.data.admin;
        }
    })
    return [isAdmin, isAdminLoading]
}