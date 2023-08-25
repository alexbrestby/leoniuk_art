import { SocialIcon } from 'react-social-icons'
import Styles from './MySocial.module.css'

interface Status {
  status: string,
}

const MySocial = ({ status }: Status) => {

  const darkThemeMq = window.matchMedia("(prefers-color-scheme: dark)")
  const bgColor = (darkThemeMq.matches) ? '#fafafa' : 'initial'

  return (
    <div className={`${status} ${Styles.MySocial}`} >
      <SocialIcon
        url='https://www.instagram.com/louise_omi/'
        style={{ height: 40, width: 40, marginRight: '10px' }}
      />
      <SocialIcon
        url='https://www.pinterest.com/louise_omi/'
        style={{ height: 40, width: 40, marginRight: '10px' }}
      />
      <SocialIcon
        url='https://www.tiktok.com/@zanktybro'
        style={{ height: 40, width: 40, marginRight: '10px' }}
        bgColor={bgColor}
      />
      <SocialIcon
        url='email:louiseomig@gmail.com'
        network='email' style={{ height: 40, width: 40, marginRight: '10px' }}
      />
      <SocialIcon
        url='https://www.t.me/louise_omi'
        style={{ height: 40, width: 40 }}
      />
    </div>
  )
}

export default MySocial
