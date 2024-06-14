
import { useAuth } from "../../Hook/useAuth"
import { NavLink } from 'react-router-dom'
import { useUserInfo } from "../../Hook/useUserInfo"
import logo  from "/diagno-sage.png";

export const Navbar = () => {
  const {user, logOut} = useAuth()
  const {data} = useUserInfo()
  const navOptions = (
    <>
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
      <li>
        <NavLink to="/allTests">All Tests</NavLink>
      </li>
      {user && data?.role === "user" && (
       <li>
         <NavLink to="/dashboard/myProfile" className="indicator">
          <button className="mr-3">
            Dashboard
          </button>
        </NavLink>
       </li>
      )}
      { user  &&  data?.role === "admin" &&
      <li>
        <NavLink to="/dashboard/addBanner" className="indicator">
        <button className="mr-3">
          Dashboard
        </button>
      </NavLink>
      </li>
      }
    </> )
    
    const signOut =() =>{
      logOut()
    }
  return (
    <div className=" navbar  fixed z-10 bg-black max-w-screen-xl mx-auto bg-opacity-30 text-white">
      <div className="navbar-start">
        <div className="dropdown">
          <button className="btn btn-ghost lg:hidden">
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
          </button>
          <ul
            
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-gray-400 rounded-box w-52"
          >
            {navOptions}
          </ul>
        </div>
        <img src={logo} alt="" className="size-16 text-deep-purple-accent-400 "/>
        <h1 className="text-xl">DiagnoSage</h1>
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
