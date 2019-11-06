import React from 'react'
import Reason from './logo-reason.png'
import TypeScript from './logo-typescript.png'

type Logos = 'typescript' | 'reason'

type Props = { name: Logos }

const getLogo = (name: Logos) => {
  switch (name) {
    case 'reason':
      return Reason
    case 'typescript':
      return TypeScript
  }
}

export const Logo: React.FC<Props> = ({ name }) => (
  <img src={getLogo(name)} className="App-logo" alt="logo" />
)
