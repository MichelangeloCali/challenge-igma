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
  const clients = [
    {
      client: <Client1Mrv />,
    },
    {
      client: <Client7BrasilPrev />,
    },
    {
      client: <Client2Idb />,
    },
    {
      client: <Client8Comgas />,
    },
    {
      client: <Client3Bayer />,
    },
    {
      client: <Client9Cvc />,
    },
    {
      client: <Client4Centauro />,
    },
    {
      client: <Client10Neoenergia />,
    },
    {
      client: <Client5Google />,
    },
    {
      client: <Client11Honda />,
    },
    {
      client: <Client6Ambev />,
    },
    {
      client: <Client12SirioLibanes />,
    },
  ]

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
        {clients.map((item) => item.client)}
      </div>
    </Section>
  )
}
