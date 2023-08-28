import React from "react";
import Styles from "./MyMenu.module.css";

interface MenuItem {
  href: string;
  value: string;
}

interface MyMenuProps {
  items: MenuItem[];
  isActive: boolean,
}

const MyMenu: React.FC<MyMenuProps> = ({ isActive, items }) => {

  return (
    <div className={`${Styles.MyMenu} ${isActive ? Styles.Active : ''}`}>
      <div className={`${Styles.MyMenuBlur} ${isActive ? Styles.Active : ''}`}></div>
      <ul className={`${Styles.MyMenuList} ${isActive ? `${Styles.Active}` : ''}`}>
        {items.map((item, index) => (
          <li key={index} className={`${Styles.MyMenuItem} ${index === items.length - 1 ? Styles.LastItem : ''}`}>
            <a href={item.href}>
              {item.value}
            </a>
          </li>
        ))}
      </ul>
    </div >
  );
};

export default MyMenu;