import { ReactNode } from 'react'

import styles from './Section.module.scss'

type SectionPropsType = {
  children: ReactNode
  ariaLabel: string
} & React.HTMLAttributes<HTMLElement>

export const Section = ({
  children,
  ariaLabel,
  ...props
}: SectionPropsType) => {
  return (
    <section
      aria-label={ariaLabel}
      className={styles.principal_section}
      {...props}
    >
      {children}
    </section>
  )
}
