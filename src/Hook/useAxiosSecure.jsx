import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useAuth } from "./useAuth";


const axiosSecure = axios.create({
    baseURL: 'http://localhost:5000',
    withCredentials: true,
});

export const useAxiosSecure = () => {
   const {logOut} = useAuth()
    const navigate = useNavigate();

  axiosSecure.interceptors.request.use((config)=>{
    const token = localStorage.getItem('token');
    console.log('interceptor break', token)
    config.headers.authorization = `Bearer ${token}`
    return config
  }, (error)=>{
    return Promise.reject(error)
  })

  // access interceptors 401 403 in not allowed
  axiosSecure.interceptors.response.use((response)=>{
    return response
  }, async(err)=>{
    const status = err.response.status;
    console.log(status)
    if(status === 401 || status === 403){
    await logOut()
      navigate('/login')
    }
    return Promise.reject(err)
  })

  return  axiosSecure
}
