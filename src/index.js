//Global Controller
import '../src/style.scss';
import Search from './models/Search';
import { elements, renderLoader, clearLoader } from './views/base';
import * as searchView from './views/searchView';
import * as recipeView from './views/recipeView';
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
const controlRecipe = async () => {
    //retrieve ID from the url
    const id = window.location.hash.replace('#', '');
    console.log(id);

    if(id){
        //prepare the UI for changes
        recipeView.clearRecipe();
        renderLoader(elements.recipe);

        //highlight selected recipe result
        if(state.search) searchView.highlightSelected(id);

        //create new recipe object
        state.recipe = new Recipe(id);

        try {
            //get recipe data and parse ingredients
            await state.recipe.getRecipe();
            state.recipe.parseIngredients();

            //state.recipe.parseIngredients();

            //calculate servings and time/
            state.recipe.calcTime();
            state.recipe.calcServings();

            //render recipe
            clearLoader();
            recipeView.renderRecipe(state.recipe);

        } catch (error){
            alert('Error processing the recipe');
        }
    }
};

//window.addEventListener('hashchange', controlRecipe);
//window.addEventListener('load', controlRecipe);

['hashchange', 'load'].forEach(event => window.addEventListener(event, controlRecipe));