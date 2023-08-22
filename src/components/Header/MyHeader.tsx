import MySocial from '../Social/MySocial';
import MyLogo from '../UI/Logo/MyLogo';
import Styles from './MyHeader.module.css'

const MyHeader = () => {

  return (
    <header className={Styles.MyHeader}>
      <MyLogo fontSize='2em' />
      <MySocial status='header' />
    </header>
  )
}

export default MyHeader;
