import { FC } from "react";
import Styles from "./MyBurger.module.css";

type MyHeaderProps = {
  onClick: () => void,
  isActive: boolean,
}

const Burger: FC<MyHeaderProps> = ({ isActive, onClick }) => {

  return (
    <div
      className={`${Styles.MyBurger} ${isActive ? Styles.Active : ''}`}
      id="burger"
      onClick={onClick}
    >
      <span className={Styles.MyBurgerLine}></span>
      <span className={Styles.MyBurgerLine}></span>
      <span className={Styles.MyBurgerLine}></span>
    </div>
  )
};

export default Burger;