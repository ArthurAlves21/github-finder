import React, {useContext} from 'react';
import InputText from '../../Items/Forms/InputText';
import InputSubmit from '../../Items/Forms/InputSubmit';
import { Form } from './styles';
import GetCardContext from '../../../Context/GetCardContext'
import getRepoInfo from '../../../functions/api/getRepoInfo';
import getMainInfo from '../../../functions/api/getMainInfo';

function FormData() {
  const {info, setInfo, search} = useContext(GetCardContext)

  async function handleSubmit(e){

    e.preventDefault()

    const repoInfo = (await getRepoInfo(search))
    const mainInfo = (await getMainInfo(search))

    setInfo({
      ...info, 
      name:mainInfo.name,
      date: mainInfo.date,
      login:search, 
      stars: repoInfo.stars, 
      repos:mainInfo.repos, 
      gists:mainInfo.gists, 
      followers: mainInfo.followers, 
      watchers: repoInfo.watchers
    })   
  }

  return(
    <>
    <Form onSubmit={(e) => handleSubmit(e)}>
    <InputText placeholder={`Nome de usuário no github`}/>
    <InputSubmit value={`buscar`}/>
    </Form>
    </>
  );
}

export default FormData;