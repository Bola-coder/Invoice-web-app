import {
  FaHome,
  FaFileInvoice,
  FaUserFriends,
  FaReceipt,
  FaUser,
  FaCog,
} from "react-icons/fa";
import {
  MdHome,
  MdFilePresent,
  MdPeople,
  MdReceipt,
  MdPerson,
  MdSettings,
} from "react-icons/md";

const routes = [
  {
    name: "Dashboard",
    path: "/dashboard",
    icon: FaHome, // No JSX here
    activeIcon: MdHome, // No JSX here
    position: "top",
  },
  {
    name: "Invoice",
    path: "/invoice",
    icon: FaFileInvoice,
    activeIcon: MdFilePresent,
    position: "top",
  },
  {
    name: "Client",
    path: "/client",
    icon: FaUserFriends,
    activeIcon: MdPeople,
    position: "top",
  },
  {
    name: "Companies",
    path: "/companies",
    icon: FaReceipt,
    activeIcon: MdReceipt,
    position: "top",
  },
  {
    name: "Profile",
    path: "/profile",
    icon: FaUser,
    activeIcon: MdPerson,
    position: "bottom",
  },
  {
    name: "Settings",
    path: "/settings",
    icon: FaCog,
    activeIcon: MdSettings,
    position: "bottom",
  },
];

export default routes;
