//Global Controller
import '../src/style.scss';
import Search from './models/Search';
import { elements, renderLoader, clearLoader } from './views/base';
import * as searchView from './views/searchView';
import * as recipeView from './views/recipeView';
import Recipe from './models/Recipe';
import List from './models/List';
import * as listView from './views/listView';
import Likes from './models/Likes';
import * as likesView from './views/likesView';

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
            recipeView.renderRecipe(state.recipe, state.likes.isLiked(id));

        } catch (error){
            alert('Error processing the recipe');
            clearLoader();
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
        const item = state.list.addItem(el.count, el.unit, el.ingredient);
        listView.renderItem(item);
    });
};


//Handle delete and update list item events
elements.shopping.addEventListener('click', e =>{
    const id = e.target.closest('.shop-item').dataset.itemid;

    //handle the delete event
    if(e.target.matches('.shop-delete, .shop-delete *')) {
        //delete from state
        state.list.deleteItem(id);

        //delete from UI
        listView.deleteItem(id);

    //handle the count update    
    } else if(e.target.matches('.shop-count-value')) {
        const val = parseFloat(e.target.value, 10);
        state.list.updateCount(id, val);
    }
});


/**
 * Likes controller
 */
//testing***************************************************
state.likes = new Likes();
const controlLike = () => {
    //create a likes object if not yet there
    if(!state.likes) state.likes = new Likes();
    
    const currentID = state.recipe.id;
    
    //user hasnt liked current recipe
    if(!state.likes.isLiked(currentID)) {
        //add like to the state
        const newLike = state.likes.addLike(
            currentID,
            state.recipe.title,
            state.recipe.publisher,
            state.recipe.img
        );

        //toggle the like button
        likesView.toggleLikeBtn(true);

        //add like to UI list
        likesView.renderLike(newLike);

    //user has liked the current recipe    
    } else {
        //remove like from the state
        state.likes.deleteLike(currentID);

        //toggle the like button
        likesView.toggleLikeBtn(false);

        //remove like from UI list 
        likesView.deleteLike(currentID);

    }
    likesView.toggleLikesMenu(state.likes.getNumLikes());

};


//event listener on th recipe object
elements.recipe.addEventListener('click', e => {
    if (e.target.matches('.add-to-shopping, add-to-shopping *')) {
        //add to ingredient shoppiog list
        controlList();
        listView.renderShopBtn(state.recipe);
    } else if(e.target.matches('.like-basket, .like-basket *')) {
        //call like controller
        controlLike();
    }
});