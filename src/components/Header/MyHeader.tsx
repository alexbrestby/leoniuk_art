import MySocial from '../Social/MySocial';
import MyLogo from '../UI/Logo/MyLogo';
import Styles from './MyHeader.module.css'

const MyHeader = () => {

  return (
    <header className={Styles.MyHeader}>
      <MyLogo fontSize='2em' status='header' />
      <MySocial status='header' />
    </header>
  )
}

export default MyHeader;
