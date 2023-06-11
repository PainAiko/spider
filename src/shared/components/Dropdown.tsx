import MenuItem from "./MenuItem";
import { RxCaretUp } from "react-icons/rx";
import { useState } from "react";

interface DropdownProps {
  text: string;
  icon: any;
  children: any;
  isActive?: boolean;
}

export default function Dropdown({
  text,
  icon,
  children,
  isActive,
}: DropdownProps) {

  const [show, setShow] = useState<boolean>(false);

  const handleDropdown = () => {
    console.log("dropdown");
    
    setShow((prev: boolean) => !prev);
  };
  return (
    <li className="dropdown transition-all">
      <span
        className={`nav-menu-item ${(show || isActive) ? "active" : ""}`}
        onClick={handleDropdown}
      >
        <span className="left flex items-center font-semibold z-[2] transition-all duration-300">
          <span className="w-[30px] pl-1 icon  duration-300">{icon}</span>
          <span className="text overflow-hidden ">{text}</span>
        </span>
        <RxCaretUp className={`caret text-xl z-[2] transition-all duration-300 ${show ? "rotate-180" : ""}`} />
      </span>
      <ul className={`overflow-hidden transition-all duration-500 ease-in-out ${show ? "max-h-[1000px]" : "max-h-0"}`}>{children}</ul>
    </li>
  );
}
