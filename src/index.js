//Global Controller
import '../src/style.scss';
import axios from 'axios';


console.log('Hi Erik');

async function getResults(query){
    const key = 'a1077a8739698631f7be89d0b363027e';
    const res = await axios(`https://www.food2fork.com/api/search?key=${key}&q=${query}`);
    const recipes = res.data.recipes;
    console.log(recipes);
}
getResults('pizza');
