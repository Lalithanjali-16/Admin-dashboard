import React, { useState } from 'react';
import Logo from '../../images/logo.png';
import './Sidebar.css';
import { SidebarData } from '../../data/Data';
import { UilSignOutAlt } from '@iconscout/react-unicons';

const Sidebar = () => {
  const [selected, setSelected] = useState(0);

  return (
    <div className="Sidebar">
      {/* Logo Section */}
      <div className="logo">
        <img src={Logo} alt="Logo" />
        <span>
          Sh<span>o</span>ps
        </span>
      </div>

      {/* Menu Section */}
      <div className="menu">
        {SidebarData.map((item, index) => (
          <div
            key={index}
            className={selected === index ? "menuItem active" : "menuItem"}
            onClick={() => setSelected(index)}
          >
            <item.icon />
            <span>{item.heading}</span>
          </div>
        ))}
        
        {/* Logout Icon */}
        <div className="menuItem">
          <UilSignOutAlt />
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
