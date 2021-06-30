import React, {useContext} from 'react';

import { Container, Icon, Text } from './styles';
import IconUser from '../../Items/Icons/IconUser'
import MediumText from '../../Items/Text/MediumText'
import TinyText from '../../Items/Text/TinyText';
import GetCardContext from '../../../Context/GetCardContext'

function UserData() {
  const {info, search} = useContext(GetCardContext) 
  console.log(info)
  return (
    <>
    <Container>
    <Icon>
    <IconUser />
    </Icon>
    <Text>
    <MediumText text={`Nome: `+ info.name}/>
    <MediumText text={`login: `+"@"+info.login}/>
    <TinyText text={`Membro desde `+info.date}/>
    </Text>
    </Container>
    </>
  );
}

export default UserData;