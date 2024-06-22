import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useAuth } from "./useAuth";
import { useEffect, useState } from "react";


const axiosSecure = axios.create({
    baseURL: 'https://diagno-sage-server.vercel.app'
});

export const useAxiosSecure = () => {
  const {logOut} = useAuth();
  const navigate = useNavigate();
  const [errorStatus, setErrorStatus] = useState(null);

  useEffect(() => {
    if (errorStatus === 401 || errorStatus === 403) {
      logOut().then(() => {
        navigate('/login');
      });
    }
  }, [errorStatus, logOut, navigate]);

  useEffect(() => {
    const requestInterceptor = axiosSecure.interceptors.request.use(
      (config) => {
        const token = localStorage.getItem('token');
        // console.log('interceptor break', token);
        config.headers.authorization = `Bearer ${token}`;
        return config;
      },
      (error) => {
        return Promise.reject(error);
      }
    );

    const responseInterceptor = axiosSecure.interceptors.response.use(
      (response) => {
        return response;
      },
      async (err) => {
        const status = err.response.status;
        // console.log(status);
        setErrorStatus(status); // Set the error status
        return Promise.reject(err);
      }
    );

    // Cleanup function to remove interceptors when the component unmounts
    return () => {
      axiosSecure.interceptors.request.eject(requestInterceptor);
      axiosSecure.interceptors.response.eject(responseInterceptor);
    };
  }, []);
    return  axiosSecure
}
