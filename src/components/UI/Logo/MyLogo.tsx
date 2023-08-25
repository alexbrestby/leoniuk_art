import { useEffect } from 'react';
import Styles from './MyLogo.module.css'

interface customStyle {
  fontSize: string,
  status: string,
}

const MyLogo = (props: customStyle) => {

  useEffect(() => {
    const elements = [
      { id: '.first_S', classes: ['anime',], delay: 1000 },
      { id: '.first_T', classes: ['anime'], delay: 1500 },
      { id: '.first_S', classes: ['d-none'], delay: 5000 },
      { id: '.first_T', classes: ['d-none'], delay: 5500 },
      { id: '.first_A', classes: ['anime'], delay: 2000 },
      { id: '.second_T', classes: ['anime'], delay: 6000 },
      { id: '.first_R', classes: ['anime'], delay: 10500 },
      { id: '.second_T', classes: ['anime'], delay: 10500 },
      { id: '.second_S', classes: ['anime'], delay: 10500 },
    ];

    elements.forEach((element) => {
      const { id, classes, delay } = element;

      setTimeout(() => {
        const element = document.querySelector(id);

        if (element) {
          classes.forEach((className) => {
            element.classList.add(className);
            if (element.classList.contains('hidden')) {
              element.classList.remove('hidden');
            }
          });
        }
      }, delay);

      setTimeout(() => {
        const element = document.querySelector(id);

        if (element) {
          classes.forEach((className) => {
            element.classList.add(className);
            if (element.classList.contains('anime')) {
              element.classList.remove('anime');
            }
          });
        }
      }, 12000);
    });
  }, []);


  const darkThemeMq = window.matchMedia("(prefers-color-scheme: dark)")

  return (
    <a href='/' className={`${props.status === 'footer-hidden' ? 'footer-hidden' : ''} ${Styles.MyLogo}`} style={props} >
      <div className={!darkThemeMq.matches ? `${Styles.LogoImg} ${Styles.LogoImg_dark}` : Styles.LogoImg}></div>
      {
        props.fontSize === '2em' ?
          (<h3> leoniuk_
            <span className="first_S">s</span>
            <span className="first_T">t</span>
            <span className="first_A">a</span>
            <span className="first_R">r</span>
            <span className="second_T hidden">t</span>
            <span className="second_S hidden">s</span>
          </h3>)
          : (<h3>leoniuk_
            <span>a</span>
            <span>r</span>
            <span>t</span>
            <span>s</span>
          </h3>)
      }

    </a >
  )
}

export default MyLogo
