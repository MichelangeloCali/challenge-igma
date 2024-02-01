import { Button } from '@/components'

import './styles/styles.scss'
import styles from './App.module.scss'

function App() {
  return (
    <>
      <div className={styles.container}>Hey, its working</div>
      <Button circular />
    </>
  )
}

export default App
