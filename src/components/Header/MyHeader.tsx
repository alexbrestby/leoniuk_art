import MySocial from '../Social/MySocial';
import Styles from './MyHeader.module.css'

const MyHeader = () => {

  return (
    <header className={Styles.MyHeader}>
      <MySocial />
    </header>
  )
}

export default MyHeader;
