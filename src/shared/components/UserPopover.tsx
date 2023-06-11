import { Link } from "react-router-dom";
import {BiUser} from "react-icons/bi";
import {CiLogout} from "react-icons/ci";


export default function UserPopover(){
    return (
        <div className="bg-white shadow-2xl rounded-lg mt-4 w-[150px] right-0 border flex-row items-stretch">
            <Link to="/" className="w-full flex items-center gap-2 px-3 py-3 hover:bg-gray-100">
                <BiUser/>
                Profil
            </Link>
            <Link to="/" className="w-full flex items-center gap-2 px-3 py-3 hover:bg-gray-100">
                <CiLogout/>
                Deconnexion
            </Link>
        </div>
    )
}