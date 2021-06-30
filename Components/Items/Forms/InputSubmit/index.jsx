import React from 'react';

import { Container, Input } from './styles';

function InputSubmit(props) {
  return (
    <Container>
    <input type="submit" value={props.value}/>
    </Container>
  );
}

export default InputSubmit;