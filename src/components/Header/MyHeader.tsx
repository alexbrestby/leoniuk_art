import { useState } from 'react';
import MySocial from '../Social/MySocial';
import MyLogo from '../UI/Logo/MyLogo';
import MyBurger from '../UI/Burger/MyBurger';
import MyMenu from '../Menu/MyMenu';
import Styles from './MyHeader.module.css';



const MyHeader = () => {

  const items = [
    { href: '/main', value: 'главная' },
    { href: '/projects', value: 'проекты' },
    { href: '/order', value: 'заказать' },
    { href: '/login', value: 'вход' },
  ];

  const [isActive, setIsActive] = useState(false);

  const handleBurgerClick = () => {
    setIsActive(!isActive);
  }

  return (
    <header className={Styles.MyHeader}>
      <MyLogo fontSize='2em' status='header' />
      <MySocial status='header' />
      <MyBurger isActive={isActive} onClick={handleBurgerClick} />
      <MyMenu items={items} isActive={isActive} />
    </header>
  )
}

export default MyHeader;
