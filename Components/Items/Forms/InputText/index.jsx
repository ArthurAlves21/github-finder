import React, {useContext} from 'react';

import { Container, Input } from './styles';
import GetCardContext from '../../../../Context/GetCardContext';


function InputText(props) {

  const {setSearch} = useContext(GetCardContext)


  function handleChange(e){
    setSearch(e.toLowerCase())
  }

  return (
    <Container>
      <input type="text" placeholder={props.placeholder} onChange={(e) => {handleChange(e.target.value)}}/>
    </Container>
  );
}

export default InputText;