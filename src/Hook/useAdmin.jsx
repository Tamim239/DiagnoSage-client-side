import { useQuery } from "@tanstack/react-query"
import { useAuth } from "./useAuth"
import { useAxiosSecure } from "./useAxiosSecure"

export const useAdmin = () => {
 const axiosSecure = useAxiosSecure()
 const {user, loading: authLoading} = useAuth();
 const {data: isAdmin, isPending: isAdminLoading} = useQuery({
     queryKey: [user?.email, 'isAdmin'],
     enabled: !!user?.email && !authLoading,
     queryFn: async()=>{
         console.log(user?.email)
            try {
                const res = await axiosSecure.get(`/users/admin/${user?.email}`);
                console.log(res.data.admin);
                return res.data.admin;
              } catch (error) {
                console.error('Error fetching admin status:', error);
                throw new Error('Unable to fetch admin status');
              }
        }
    })
    return [isAdmin, isAdminLoading]
}
// ,{
//     headers: {Authorization: `Bearer ${localStorage.getItem('token')}`}
// }