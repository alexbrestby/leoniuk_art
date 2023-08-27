import Styles from './MyFooter.module.css'
import MySocial from '../Social/MySocial'
import MyLogo from '../UI/Logo/MyLogo'

const MyFooter = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={Styles.MyFooter}>
      <MyLogo status='footer' fontSize='1em' />
      <div className={`${Styles.MyCopy}`}>&copy;{currentYear}</div>
      <MySocial status='footer' />
    </footer>
  )
}

export default MyFooter
