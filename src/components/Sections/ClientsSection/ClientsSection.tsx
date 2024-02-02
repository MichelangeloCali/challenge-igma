import {
  Client10Neoenergia,
  Client11Honda,
  Client12SirioLibanes,
  Client1Mrv,
  Client2Idb,
  Client3Bayer,
  Client4Centauro,
  Client5Google,
  Client6Ambev,
  Client7BrasilPrev,
  Client8Comgas,
  Client9Cvc,
  Section,
} from '@/components'

import styles from './ClientsSection.module.scss'

export const ClientsSection = () => {
  return (
    <Section ariaLabel="Seção de clientes" style={{ backgroundColor: '#ccc' }}>
      <div className={styles.content_text}>
        <p>
          Expressamos mais de 20 anos de experiência criando plataformas
          digitais para as maiores empresas do Brasil, impactando milhões de
          pessoas.
        </p>
      </div>

      <div className={styles.content_clients}>
        <Client1Mrv />
        <Client7BrasilPrev />
        <Client2Idb />
        <Client8Comgas />
        <Client3Bayer />
        <Client9Cvc />
        <Client4Centauro />
        <Client10Neoenergia />
        <Client5Google />
        <Client11Honda />
        <Client6Ambev />
        <Client12SirioLibanes />
      </div>
    </Section>
  )
}
