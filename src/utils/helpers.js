import axios from 'axios';

function searchGit(name){
  let add = `https://api.github.com/users/${name}`
   return axios.get(add)
    .then((res) => (
    {data:res.data}
  ))
    .catch(function (error) {
      alert(error);
    });
}
export { searchGit }
