import axios from 'axios'

export default async function getRepoInfo(search){
  //Setting vars so you can cout the total of stars and watchers
  let watchers = 0;
  let stars = 0;

  //Api call using github patterns so you can get more than 30 repos per request
  const res = await axios(`https://api.github.com/users/${search}/repos?per_page=10000`);
  const data = await res.data

  //Counting the total amount of stars and watchers throw every object returned
  for(let i = 0; i < data.length; i++){
    watchers = watchers + data[i].watchers_count
    stars = stars + data[i].stargazers_count
  }
  
  return {
    stars: stars,
    watchers: watchers,
  }
}