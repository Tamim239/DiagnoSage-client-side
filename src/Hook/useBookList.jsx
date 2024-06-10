import { useQuery } from "@tanstack/react-query"
import axios from "axios"
import { useAuth } from "./useAuth"

export const useBookList = () => {
    const {user} = useAuth()
const {data, isPending, refetch} = useQuery({
  queryKey: [user?.email, 'bookingAll'],
  queryFn: async() =>{
    const res = await axios.get(`${import.meta.env.VITE_API_URL}/bookList/${user?.email}`)
    return res.data
  }
})
  return {data, isPending, refetch }
}
