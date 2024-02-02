import { ClientsSection, Header, HeroSection } from '@/components'

import './styles/styles.scss'
import styles from './App.module.scss'

function App() {
  return (
    <>
      <Header />
      <main className={styles.content}>
        <HeroSection />
        <ClientsSection />
      </main>
    </>
  )
}

export default App
