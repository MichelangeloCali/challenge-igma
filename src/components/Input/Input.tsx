import { InputHTMLAttributes, forwardRef } from 'react'

import styles from './Input.module.scss'

type InputPropsType = {
  label: string
  htmlFor: string
  error: boolean
  errorMessage: string
} & InputHTMLAttributes<HTMLInputElement>

export const Input = forwardRef<HTMLInputElement, InputPropsType>(
  function Input({ label, htmlFor, error, errorMessage, ...props }, ref) {
    return (
      <div className={styles.inputContent}>
        <label htmlFor={htmlFor} className={styles.label}>
          {label}
        </label>

        <input
          type="text"
          id={htmlFor}
          name={htmlFor}
          ref={ref}
          className={error ? `${styles.input} ${styles.error}` : styles.input}
          {...props}
        />
        <span className={styles.text_error}>{errorMessage}</span>
      </div>
    )
  },
)
