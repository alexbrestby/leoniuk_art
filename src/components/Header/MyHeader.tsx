import { useState, useEffect } from 'react';
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

  useEffect(() => {
    if (isActive) {
      document.body.classList.add('active');
    } else {
      document.body.classList.remove('active');
    }
  }, [isActive]);

  return (
    <header className={Styles.MyHeader}>
      <MyLogo fontSize='2em' status='header' />
      <MySocial status='header' />
      <MyBurger isActive={isActive} onClick={handleBurgerClick} />
      <MyMenu isActive={isActive} items={items} />
    </header>
  )
}

export default MyHeader;
