import axios from "axios"
 

const axiosPublic = axios.create({
    baseURL: 'https://diagno-sage-server.vercel.app'
})

export const useAxiosPublic = () => {
 return axiosPublic
}
