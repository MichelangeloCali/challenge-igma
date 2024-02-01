import { Button } from '../Button'
import { Logo } from '../Svgs'

import styles from './Header.module.scss'

export const Header = () => {
  return (
    <header className={styles.header}>
      <Logo />
      <Button circular />
    </header>
  )
}
