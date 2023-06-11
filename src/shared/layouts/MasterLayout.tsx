import { Outlet } from "react-router-dom";
import Navbar from "../components/navbar";
import AsideBar from "../components/AsideBar";
import { useEffect, useState } from "react";

const MasterLayout = () => {
  const [expandSidebar, setExpandSideBar] = useState<Boolean>(false);
  useEffect(()=>{
    console.log(expandSidebar);
    
  }, [expandSidebar]);
  return (
    <>
      <div className=" border">
        <Navbar expandSidebar={expandSidebar} setExpandSideBar={setExpandSideBar}/>
        <AsideBar expandSidebar={expandSidebar}/>
        <main id="content" role="main" className={` mt-[10px] min-h-screen transition-all duration-300 ${expandSidebar ? "ml-[120px]" : "ml-[260px]"}`}>
          <div className="">
            <Outlet />
          </div>
        </main>
      </div>
    </>
  );
};

export default MasterLayout;
