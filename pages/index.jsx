import React, {useState, useEffect} from 'react'
import UserDataCard from '../Components/Structures/UserDataCard';
import GetCardContext from '../Context/GetCardContext';
import axios from 'axios'

export default function Home() {
  const [search, setSearch] = useState("nomedeusuario")
  const [info, setInfo] = useState(
  {
   name: "Nome de Usuário",
   date: "2011", 
   login: "nomedeusuario", 
   stars: 0,
   repos: 0, 
   gists: 0, 
   followers: 0, 
   watchers: 0 
  })


  return (
    <>
    <GetCardContext.Provider value={{info, setInfo, search, setSearch}}>
    <UserDataCard/>
    </GetCardContext.Provider>
    </>

   
    
  )
}
