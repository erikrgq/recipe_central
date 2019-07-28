//Global Controller
import '../src/style.scss';
import Search from './models/Search';
import { elements, renderLoader, clearLoader } from './views/base';
import * as searchView from './views/searchView';
import * as recipeView from './views/recipeView';
import Recipe from './models/Recipe';
import List from './models/List';
import * as listView from './views/listView';

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
/*const controlSearch = async () => {
    //1. get query from the View
    const query = searchView.getInput(); 

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
};*/

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
};*/

//window.addEventListener('hashchange', controlRecipe);
//window.addEventListener('load', controlRecipe);

['hashchange', 'load'].forEach(event => window.addEventListener(event, controlRecipe));

/**
 * List controller
 */
const controlList = () => {
    //create a new list if there is none yet
    if(!state.list) state.list = new List();

    //add each ingredient to the list and UI
    state.recipe.ingredients.forEach(el => {
        const item = state.list.addItem(el.count, el.unit, el.ingredient, el.publisher, el.url);
        listView.renderItem(item);
        listView.renderShopBtn(item);
    });
};

//event listener on th recipe object
elements.recipe.addEventListener('click', e => {
    if (e.target.matches('.add-to-shopping, add-to-shopping *')) {
        controlList();
    }
});