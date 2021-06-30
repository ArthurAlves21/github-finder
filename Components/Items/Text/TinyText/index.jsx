import React from 'react';

import { Container, Tiny } from './styles';

function TinyText(props) {
  return (
    <>
    <Container>
      <Tiny>{props.text}</Tiny>
    </Container>
    </>
  );
}

export default TinyText;