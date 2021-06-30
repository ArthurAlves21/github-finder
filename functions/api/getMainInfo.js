import axios from 'axios'
import getDateYear from '../standard/getDateYear';

export default async function getMainInfo(search){
  //Api call to github main endpoint
  const res = await axios(`https://api.github.com/users/${search}`);
  const data = await res.data

  const date =  getDateYear(data.created_at)
  //returning the main info from it (no mysteries)
  return {
    name: data.name, date: date, repos: data.public_repos, gists: data.public_gists, followers:  data.followers
  }
}