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
    try{
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
    }catch(e){
      setInfo({
        name: "Nome de Usuário",
        date: "2011", 
        login: "nomedeusuario", 
        stars: 0,
        repos: 0, 
        gists: 0, 
        followers: 0, 
        watchers: 0 
       })   
    }
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