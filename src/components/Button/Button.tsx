import { ButtonHTMLAttributes } from 'react'
import { UserIcon } from '../Svgs'

import styles from './Button.module.scss'

type ButtonPropsType = {
  circular?: boolean
  text?: string
  photo?: string
  disabled?: boolean
} & ButtonHTMLAttributes<HTMLButtonElement>

export const Button = ({
  circular = false,
  text,
  photo,
  disabled,
}: ButtonPropsType) => {
  if (circular) {
    return (
      <button
        className={styles.circular_button}
        disabled={disabled}
        aria-label={photo ? 'Foto Perfil' : 'Botão de Login'}
      >
        {photo ? <img src={photo} alt="User" /> : <UserIcon />}
      </button>
    )
  }

  return (
    <button
      className={styles.button}
      disabled={disabled}
      aria-label="Assinar Newsletter"
    >
      {text}
    </button>
  )
}
