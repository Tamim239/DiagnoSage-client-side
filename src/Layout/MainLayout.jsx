import { Outlet, useLocation } from "react-router-dom"
import { Navbar } from "../Shared/Navbar/Navbar"
import { Footer } from "../Shared/Footer/Footer"

export const MainLayout = () => {

  const location = useLocation();
  const noHeaderFooter = location.pathname.includes('/login') || location.pathname.includes('/signUp')

  return (
    <div>
      {noHeaderFooter || <Navbar />}
        <div className="">
        <Outlet />
        </div>
    { noHeaderFooter || <Footer />}
    </div>
  )
}
