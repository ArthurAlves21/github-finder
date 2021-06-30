import React from 'react';

import { Container, Small } from './styles';

function SmallText(props) {
  return (
    <Container>
      <Small>{props.text}</Small>
    </Container>
  );
}

export default SmallText;