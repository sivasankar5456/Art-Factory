import React, { useState } from "react";
import HomeICon from "../../assets/svg/home.svg";
import Notifications from "../../assets/svg/notification.svg";
import Shop from "../../assets/svg/heart-4.svg";
import Conversation from "../../assets/svg/message.svg";
import Wallet from "../../assets/svg/message-1.svg";
import Subscription from "../../assets/svg/favorite.svg";
import Profile from "../../assets/svg/profile.svg";
import Settings from "../../assets/svg/setting.svg";
import LogOut from "../../assets/svg/logout.svg";
import SidebarItem from "./SidebarItem";
import { useNavigate } from "react-router-dom";
import { logout } from "../services/authService";

const Sidebar = () => {
  const navigate = useNavigate();
  const [isActive, setIsActive] = useState("Home");

  const handleLogout = async () => {
    await logout();
    navigate("/login");
  };

  const handleIsActive = (label) => {
    setIsActive(label);
  };

  return (
    <aside>
      <div className="menu">
        <SidebarItem
          icon={HomeICon}
          label="Home"
          active={isActive}
          handleClick={handleIsActive}
        />
        <SidebarItem
          icon={Notifications}
          label="Notifications"
          active={isActive}
          handleClick={handleIsActive}
        />
        <SidebarItem
          icon={Shop}
          label="Shop"
          active={isActive}
          handleClick={handleIsActive}
        />
        <SidebarItem
          icon={Conversation}
          label="Conversation"
          active={isActive}
          handleClick={handleIsActive}
        />
        <SidebarItem
          icon={Wallet}
          label="Wallet"
          active={isActive}
          handleClick={handleIsActive}
        />
        <SidebarItem
          icon={Subscription}
          label="Subscription"
          active={isActive}
          handleClick={handleIsActive}
        />
        <SidebarItem
          icon={Profile}
          label="My Profile"
          active={isActive}
          handleClick={handleIsActive}
        />
        <SidebarItem
          icon={Settings}
          label="Settings"
          active={isActive}
          handleClick={handleIsActive}
        />
      </div>
      <div style={{ color: "#88C2BB", marginTop:'50px',}}>
        <SidebarItem
          icon={LogOut}
          label="Log out"
          style={{color:'#88c2bb'}}
          handleClick={handleLogout}
        />
      </div>
    </aside>
  );
};

export default Sidebar;
