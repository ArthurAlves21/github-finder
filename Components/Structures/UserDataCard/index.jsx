import React, {useContext} from 'react';

import { Card, Container } from './styles';
import FormData from '../../Organisms/Form';
import UserData from '../../Organisms/UserData';
import ContentData from '../../Organisms/ContentData'

function UserDataCard() {
  return (
    <>
    <Container>
    <Card>
    <FormData />
    <UserData />
    <ContentData />
    </Card>
    </Container>
    </>
  );
}

export default UserDataCard;