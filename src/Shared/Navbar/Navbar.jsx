
import axios from "axios"
import { useAuth } from "../../Hook/useAuth"
import { Link, NavLink } from 'react-router-dom'

export const Navbar = () => {
  const {user, logOut} = useAuth()
  const navOptions = (
    <>
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
      <li>
        <NavLink to="menu">All Tests</NavLink>
      </li>
      <li>
        <NavLink to="/order">Our Shop</NavLink>
      </li>
      {user && (
        <Link to="/dashboard/myProfile" className="indicator">
          <button className="mr-3">
            Dashboard
          </button>
        </Link>
      )}
    </> )
    
    const signOut = async() =>{
      const { data } = await axios(`http://localhost:5000/logout/logout`,{
        withCredentials: true,
      });
      console.log(data);
      logOut()
      
      console.log('hello')
    }

  return (
    <div className=" navbar  fixed z-10 bg-black max-w-screen-xl mx-auto bg-opacity-30 text-white">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            {navOptions}
          </ul>
        </div>
        <a className="btn btn-ghost text-xl">DiagnoSage</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{navOptions}</ul>
      </div>
      <div className="navbar-end">
        {user ? (
          <div>
            <button onClick={signOut} className="btn">
              <NavLink>Log Out</NavLink>
            </button>
          </div>
        ) : (
          <div>
            <button className="btn">
              <NavLink to="/login">Login</NavLink>
            </button>
          </div>
        )}
      </div>
    </div>
  )
}
