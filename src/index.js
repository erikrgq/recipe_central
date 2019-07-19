//Global Controller
import '../src/style.scss';
import Search from './models/Search';
import { elements } from './views/base'
import * as searchView from './views/searchView';

/**Global state of the app
 * -Search Object
 * -Current recipe object
 * -SHopping list object
 * -Liked recipes
 */

const state = {};

const controlSearch = async () => {
    //1. get query from the View
    const query = searchView.getInput(); //TODO
    console.log(query);

    try{
        if(query){
        //2. New search object and add to state
        state.search = new Search(query);

        //3. prepare UI for results

        //4. search for recipes
        await state.search.getResults();

        //5. render results on UI
        searchView.renderResults(state.search.result);

        }
    } catch(error){
        alert(error);
    }
};

elements.searchForm.addEventListener('submit', e => {
    e.preventDefault();
    controlSearch();
});



