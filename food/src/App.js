import './App.css';
//import './Key.js'
import Axios from 'axios'
import { useState } from 'react'
import RecipeTile from './RecipeTile';

function App ()
{
 const [ query, setquery ] = useState ("");
const [ recipes, setrecipes ] = useState ([]);
const [ healthLabels, sethealthLabels ] = useState("vegan")

const YOUR_APP_ID = "c9f8eb8c";
const YOUR_APP_KEY = "63332e374a26de13bef2ef12785190ca"; 
 var url = `https://api.edamam.com/search?q=query&app_id=${YOUR_APP_ID}&app_key=${YOUR_APP_KEY}&&health=${healthLabels}` ;
 
 async function getRecipes () {
 var result = await Axios.get(url);
 setrecipes(result.data.hits)
   console.log(result.data)
 }

 const onSubmit=(e) => {
  e.preventDefault();
  getRecipes(); 
}
 
 return (
    <div className="App">
      <h1>Food Recipe Plaza</h1>
      <form className="app_searchForm" onSubmit={onSubmit}>
        <input type="text" className="app_input" placeholder="Enter Ingridient" value={query} onChange ={(e) => setquery(e.target.value)} />
        <input type="submit"className="app_search" value="Search" />
         <select className="app_healthLabels">
           <option onClick={() => sethealthLabels("vegan")}>Vegan</option>
         </select>
      </form>
      <div className="app_recipes">
        {recipes.map(recipe =>{
          return <RecipeTile recipe={recipe} />
        })}
      </div>
    </div>
  );
}

export default App;
