import Styles from './App.module.css'
import MyHeader from './components/Header/MyHeader'
import MyFooter from './components/Footer/MyFooter'
import Main from './components/Main/Main'

const App = () => {

  function checkThemeSetting() {
    if (window.matchMedia('(prefers-color-scheme)').media !== 'not all') {
      console.log('🎉 Тёмный режим поддерживается')
    }
  }

  checkThemeSetting()

  return (
    <div className={Styles.wrapper}>
      <MyHeader></MyHeader>
      <Main></Main>
      <MyFooter></MyFooter>
    </div>
  )
}

export default App
