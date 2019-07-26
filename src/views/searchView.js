import { elements } from './base'

export const getInput = () => elements.searchInput.value;

//Clears the input form after searching
export const clearInput = () => {
    elements.searchInput.value = '';
};

//We want this to clear the html on box 1 after another search is inputed
export const clearResults = () => {
    elements.searchResList.innerHTML = '';
};

export const highlightSelected = id => {
    const resultsArr = Array.from(document.querySelectorAll('.result-link'));
    resultsArr.forEach(el => {
        el.classList.remove('active');
    });
    document.querySelector(`a[href="#${id}"]`).classList.add('active');
};

//We want shorter titles to be displayed
const  limitRecipeTitle = (title, limit = 17) => {
    const newTitle = [];

    if(title.length > limit){
        title.split(' ').reduce((acc, cur) => {
            if(acc + cur.length <= limit){
                newTitle.push(cur);
            }
            return acc + cur.length;
        }, 0);

        //return the shorten result
        return `${newTitle.join(' ')} ...`;
    }
    return title;
};

const renderRecipe = recipe => {
    const markup = `
    <li class="recipe-results">
        <a class="result-link" href="#${recipe.recipe_id}">
            <figure class="result-fig">
            <img src="${recipe.image_url}" alt="${recipe.title}">
            </figure>
            <div class="result-title">
                <h3>${limitRecipeTitle(recipe.title)}</h3>
                <p>${recipe.publisher}</p>
            </div>
        </a>
  </li>
    `;

    elements.searchResList.insertAdjacentHTML('beforeend', markup);
};

export const renderResults = recipes => {
    recipes.forEach(renderRecipe);
};