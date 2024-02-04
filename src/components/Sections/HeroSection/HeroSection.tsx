import { DetailImage, LogoIgma, Section } from '@/components'
import imageMobile from '../../../assets/image-mobile.png'

import styles from './HeroSection.module.scss'

export const HeroSection = () => {
  return (
    <Section ariaLabel="Seção principal">
      <div className={styles.content_text}>
        <h2>
          Prazer, somos
          <LogoIgma />
        </h2>
        <h1>
          Acreditamos em um mundo onde experiências incríveis são essenciais.
        </h1>
        <h3>
          Unimos design e tecnologia para resolver problemas complexos de
          empresas. Criamos produtos digitais que revolucionam o relacionamento
          entre empresas e consumidores.
        </h3>
      </div>

      <div className={styles.content_img}>
        <div className={styles.image}>
          <DetailImage className={styles.detail_image} />
          <img
            src={imageMobile}
            alt="Foto do magma vulcânico"
            aria-describedby="A foto ilusta o significado de nossa marca que é junção de duas palavras em Latim: Ígma e Magma"
          />
        </div>
      </div>
    </Section>
  )
}
