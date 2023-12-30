import {
  Body,
  Container,
  Html,
  Link,
  Preview,
  Text,
  Tailwind,
} from '@react-email/components'
import React from 'react'

const WelcomeTemplate = ({ name }: { name?: string }) => {
  return (
    <Html>
      <Preview>WelcomeTemplate</Preview>
      <Tailwind>
        <Body className="bg-slate-200">
          <Container>
            <Text>Hello {name ? name : 'World'}</Text>
            <Link href="https://nextfeline.uk">nextfeline.uk</Link>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  )
}

export default WelcomeTemplate
