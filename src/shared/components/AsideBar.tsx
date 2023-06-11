import { Link } from "react-router-dom";
import { useState } from "react";
import Dropdown from "./Dropdown";
import { AiOutlineSetting } from "react-icons/ai";
import {BiUser} from "react-icons/bi"
import MenuItem from "./MenuItem";

type Props = {
  expandSidebar: Boolean;
};

const AsideBar = ({ expandSidebar }: Props) => {
  return (
    <aside
      className={
        "w-[240px] bg-white h-screen fixed top-0 z-50 shadow-xl transition-all duration-300 sidebar flex-col " +
        (expandSidebar ? "w-[80px] collapsed-sidebar" : "overflow-y-auto")
      }
    >
      <div className="top h-30 flex items-center justify-center h-[130px]">
        <Link to="/">
          <img
            src="./dashboard/img/logo/Spider.png"
            alt="Logo spider"
            className="w-[150px]"
          />
        </Link>
      </div>
      <ul className={"menu pr-7"}>
        <Dropdown icon={<AiOutlineSetting />} text="Paramètre" isActive>
          <MenuItem to="/">Banques</MenuItem>
          <MenuItem to="/">Devises</MenuItem>
          <MenuItem to="/">Type de clients</MenuItem>
          <MenuItem to="/">Type de fournisseurs</MenuItem>
          <MenuItem to="/">Unités</MenuItem>
          <MenuItem to="/">Utilisateurs</MenuItem>
          <MenuItem to="/">Rôles</MenuItem>
          <MenuItem to="/">Historique des actions</MenuItem>
          <MenuItem to="/">Qualités</MenuItem>
          <MenuItem to="/">Catégories tarifaires</MenuItem>
          <MenuItem to="/">Incoterms</MenuItem>
          <MenuItem to="/">Régions</MenuItem>
          <MenuItem to="/">échéances</MenuItem>
          <MenuItem to="/">Catalogues</MenuItem>
          <MenuItem to="/">Entrepôts</MenuItem>
          <MenuItem to="/">Section entrepôts</MenuItem>
          <MenuItem to="/">Zones</MenuItem>
        </Dropdown>
        <Dropdown icon={<BiUser/>} text="Client">
          <MenuItem to="/">Clients</MenuItem>
          <MenuItem to="/">Besoins</MenuItem>
          <MenuItem to="/">Commandes & validation</MenuItem>
          <MenuItem to="/">Bon d'avoir</MenuItem>
          <MenuItem to="/">Historiques des commandes</MenuItem>
          <MenuItem to="/">Relevé d'échéance</MenuItem>
        </Dropdown>
      </ul>
    </aside>
  );
};

export default AsideBar;
