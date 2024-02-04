import {
  ClientsSection,
  Header,
  HeroSection,
  NewsletterSection,
} from '@/components'

import './styles/styles.scss'
import styles from './App.module.scss'

function App() {
  return (
    <>
      <Header />
      <main className={styles.content}>
        <HeroSection />
        <ClientsSection />
        <NewsletterSection />
      </main>
    </>
  )
}

export default App
