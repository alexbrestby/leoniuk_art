import Styles from './MyFooter.module.css'
import MySocial from '../Social/MySocial'

const MyFooter = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={Styles.MyFooter}>
      <div>&copy;{currentYear} leoniuk_art</div>
      <MySocial />
    </footer>
  )
}

export default MyFooter
