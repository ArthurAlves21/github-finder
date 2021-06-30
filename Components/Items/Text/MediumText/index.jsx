import React from 'react';

import { Container, Medium } from './styles';

function MediumText(props) {
  return (
  <Container>
    <Medium>{props.text}</Medium>
  </Container>
  );
}

export default MediumText;