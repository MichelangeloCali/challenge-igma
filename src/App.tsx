import { Header } from './components'

import './styles/styles.scss'
import styles from './App.module.scss'
import { HeroSection } from './components/Sections/HeroSection/HeroSection'

function App() {
  return (
    <>
      <Header />
      <main className={styles.content}>
        <HeroSection />
      </main>
    </>
  )
}

export default App
