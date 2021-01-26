import React from 'react';

import { Container, ToggleLabel, ToggleSelector } from './styles';

const Toggle: React.FC = () => {
  return (
    <Container>
      <ToggleLabel>Light</ToggleLabel>
      <ToggleSelector
        checked={true}
        uncheckedIcon={false}
        checkedIcon={false}
        onChange={() => console.log('Mudou!')}
      />
      <ToggleLabel>Dark</ToggleLabel>
    </Container>
  )
}

export default Toggle;
