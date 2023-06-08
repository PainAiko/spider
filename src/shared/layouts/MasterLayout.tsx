import {Outlet} from 'react-router-dom'
import Navbar from '../components/navbar'
import AsideBar from "../components/AsideBar";
const MasterLayout = () => {
  return (
    <>
        <Navbar />
        <AsideBar />
        <main id="content" role="main" className="main kl-bg-white">
        <div className="">
            <Outlet />
        </div> 
        </main>
    </>
  )
}

export default MasterLayout