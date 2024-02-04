import { ButtonHTMLAttributes } from 'react'
import { useAuth0 } from '@auth0/auth0-react'

import { UserIcon } from '../Svgs'

import styles from './Button.module.scss'

type ButtonPropsType = {
  circular?: boolean
  text?: string
  login?: () => void
  disabled?: boolean
} & ButtonHTMLAttributes<HTMLButtonElement>

export const Button = ({
  circular = false,
  text,
  login,
  disabled,
  ...props
}: ButtonPropsType) => {
  const { isAuthenticated, user } = useAuth0()

  const photo = user?.picture

  if (circular) {
    return (
      <button
        className={styles.circular_button}
        disabled={disabled}
        aria-label={photo ? 'Foto Perfil' : 'Botão de Login'}
        onClick={login}
      >
        {isAuthenticated ? <img src={photo} alt="User" /> : <UserIcon />}
      </button>
    )
  }

  return (
    <button
      disabled={disabled}
      aria-label="Assinar Newsletter"
      className={styles.button}
      {...props}
    >
      {text}
    </button>
  )
}
