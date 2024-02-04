import { useAuth0 } from '@auth0/auth0-react'

import { Button } from '../Button'
import { Logo } from '../Svgs'

import styles from './Header.module.scss'

export const Header = () => {
  const { loginWithRedirect, isAuthenticated } = useAuth0()

  const handleLogin = () => {
    if (!isAuthenticated) loginWithRedirect()
  }

  return (
    <header className={styles.header}>
      <Logo />
      <Button circular login={handleLogin} />
    </header>
  )
}
