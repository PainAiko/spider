import { Link } from "react-router-dom";
import {useState} from "react"
import clsx from "clsx";
import LogoSideBar from "./LogoSideBar";
const AsideBar = () => {
    const [activeSetting, setActiveSetting] = useState<{parent:boolean,child: boolean}>({child:false,parent:false})
    const [activeClient, setActiveClient] = useState<{parent:boolean,child: boolean}>({child:false,parent:false})

    return (
        <aside className="js-navbar-vertical-aside navbar navbar-vertical-aside navbar-vertical navbar-vertical-fixed navbar-expand-xl navbar-dark bg-dark navbar-vertical-aside-initialized">
            <div className="navbar-vertical-container">
                <div className="navbar-vertical-footer-offset">
                    <LogoSideBar />
                    {/*Content*/}
                    <div className="navbar-vertical-content">
                        <div id="navbarVerticalMenu" className="nav nav-pills nav-vertical card-navbar-nav">
                            <div className="nav-item"

                            >
                                <div>
                                    <Link 
                                        className={clsx("nav-link flex justify-between items-center", {"active": activeSetting.parent})}  
                                        to="#" 
                                        onClick={() => { 
                                            setActiveSetting({...activeSetting,parent:!activeSetting.parent})
                                            setActiveClient({child: false, parent:false})
                                        }}
                                    >
                                        <div>
                                            <i className="bi bi-gear nav-icon"></i>
                                            <span className="nav-link-title ml-5">Paramètre</span>
                                        </div>
                                        <i className="bi bi-chevron-down nav-icon text-[10px]"></i>
                                    </Link>
                                
                                    <div className={clsx({"hidden": !activeSetting.parent})}>
                                        <a className="nav-link hover:cursor-pointer" >
                                            Banques
                                        </a>
                                        <a className="nav-link hover:cursor-pointer" >Devises</a>
                                        <a className="nav-link" >Type de fournisseurs</a>
                                        <a className="nav-link" >Unités</a>
                                    </div>
                                </div>
                                <div>
                                    <Link 
                                        className={clsx("nav-link flex justify-between items-center", {"active": activeClient.parent})}  
                                        to="#" 
                                        onClick={() => { 
                                            setActiveClient({...activeClient,parent:!activeClient.parent})
                                            setActiveSetting({child: false, parent:false})
                                        }}
                                    >
                                        <div>
                                            <i className="bi bi-gear nav-icon"></i>
                                            <span className="nav-link-title ml-5">Client</span>
                                        </div>
                                        <i className="bi bi-chevron-down nav-icon text-[10px]"></i>
                                    </Link>
                                
                                    <div className={clsx({"hidden": !activeClient.parent})}>
                                        <a className="nav-link" >
                                            Banques
                                        </a>
                                        <a className="nav-link" >Devises</a>
                                        <a className="nav-link" >Type de fournisseurs</a>
                                        <a className="nav-link" >Unités</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </aside>
    );
};

export default AsideBar