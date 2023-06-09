import { Link } from "react-router-dom";
import {useState} from "react"
import clsx from "clsx";
import LogoSideBar from "./LogoSideBar";
const AsideBar = () => {
    const [activeSetting, setActiveSetting] = useState<{parent:boolean,child: boolean}>({child:false,parent:false})
    const [activeClient, setActiveClient] = useState<{parent:boolean,child: boolean}>({child:false,parent:false})

    return (
        <aside className="">
             asidebar code
        </aside>
    );
};

export default AsideBar