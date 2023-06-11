import { Link } from "react-router-dom"

interface MenuItemProps  {
    to: string,
    children: any,
    isActive?: boolean
}
export default function MenuItem({to, children, isActive}: MenuItemProps){
    return (
        <li className={`nav-menu-item  ${isActive ? "active" : ""}`}>
            <Link to={to} className="h-full flex justify-between items-center pl-[30px] z-[2]">
                {children}
            </Link>
        </li>
    )
}