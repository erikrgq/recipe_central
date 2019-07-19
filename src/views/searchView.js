import { elements } from './base'

export const getInput = () => elements.searchInput.value;

const renderRecipe = recipe => {
    const markup = `
    <li class="recipe-results">
        <a class="result-link" href="#${recipe.recipe_id}">
            <figure class="result-fig">
            <img src="${recipe.image_url}" alt="${recipe.title}">
            </figure>
            <div class="result-title">
                <h3>${recipe.title}</h3>
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