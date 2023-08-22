import Styles from './MyLogo.module.css'

interface customStyle {
  fontSize: string,
}

const MyLogo = (props: customStyle) => {

  const darkThemeMq = window.matchMedia("(prefers-color-scheme: dark)")

  return (
    <a href='/' className={Styles.MyLogo} style={props}>
      <div className={!darkThemeMq.matches ? `${Styles.LogoImg} ${Styles.LogoImg_dark}` : Styles.LogoImg}></div>
      <h3>leoniuk_art</h3>
    </a>
  )
}

export default MyLogo
