//Global Controller
import '../src/style.scss';
import Search from './models/Search';
import { elements, renderLoader, clearLoader } from './views/base'
import * as searchView from './views/searchView';
import Recipe from './models/Recipe';

/**Global state of the app
 * -Search Object
 * -Current recipe object
 * -SHopping list object
 * -Liked recipes
 */

const state = {};

/**
 * Search Controller
 */
const controlSearch = async () => {
    //1. get query from the View
    const query = searchView.getInput(); //TODO
    console.log(query);

    if(query) {
        //2. New search object and add to state
        state.search = new Search(query);

        //3. prepare UI for results
        searchView.clearInput();
        searchView.clearResults();
        renderLoader(elements.searchResList);

        try {
            //4. search for recipes
            await state.search.getResults();

            //5. render results on UI
            clearLoader();
            searchView.renderResults(state.search.result);
        } catch (error) {
            alert('Something went wrong with the search');
            clearLoader();
        }
    }
};

elements.searchForm.addEventListener('submit', e => {
    e.preventDefault();
    controlSearch();
});

/**
 * Recipe Controller
 */
/*const controlRecipe = async () => {
    //retrieve ID from the url
    const id = window.location.hash.replace('#', '');
    console.log(id);

    if(id){
        //prepare the UI for changes

        //create new recipe object
        state.recipe = new Recipe(id);

        try{
            //get recipe data
            await state.recipe.getRecipe();

            //calculate servings and time
            state.recipe.calcTime();
            state.recipe.calcServings();

            //render recipe
            console.log(state.recipe);
        } catch (error){
            alert('Error processing the recipe');
        }
    }
};*/

//window.addEventListener('hashchange', controlRecipe);
//window.addEventListener('load', controlRecipe);

['hashchange', 'load'].forEach(event => window.addEventListener(event, controlRecipe));