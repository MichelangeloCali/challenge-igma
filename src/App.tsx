import { Header } from './components'

import './styles/styles.scss'
import styles from './App.module.scss'

function App() {
  return (
    <>
      <Header />
      <main className={styles.content}>Hey, its working</main>
    </>
  )
}

export default App
