import React, {useContext} from 'react';

import { Container } from './styles';
import SmallText from '../../Items/Text/SmallText'
import GetCardContext from '../../../Context/GetCardContext'


function ContentData() {

  const {info} = useContext(GetCardContext) 

  return (
    <>
    <SmallText text={'Repositórios públicos: '+ info.repos } />
    <SmallText text={'Estrelas Recebidas em repositórios públicos desde: '+ info.watchers }/>
    <SmallText text={'Observadores em repositórios públicos: '+ info.stars }/>
    <SmallText text={'Gists públicos: '+ info.gists }/>
    <SmallText text={'Seguidores: ' + info.followers }/>
    </>
  );
}

export default ContentData;