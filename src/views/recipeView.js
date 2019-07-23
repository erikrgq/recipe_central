import { elements } from './base';

export const clearRecipe = () => {
    elements.recipe.innerHTML = '';
};
const createIngredient = ingredient => `
    <li class="ingredient">
        <p><i class="fas fa-check"></i> ${ingredient}</p>
    </li>
`;
export const renderRecipe = recipe  => {
    const markup = `
        <figure class="recipe-figure">
            <img src="${recipe.img}" alt="${recipe.title}" class="recipe-img">
            <h1 class="recipe-title">
            <span>${recipe.title}</span>
            </h1>
        </figure>

        <div class="recipe-info">
            <div class="servings">
                <span>
                    <i class="fas fa-users"></i>
                </span>
                <h4>${recipe.servings}</h3>
                <button class="less-servings">
                    <i class="fas fa-minus"></i>
                </button>
                <button class="more-servings">
                    <i class="fas fa-plus"></i>
                </button>
            </div>

            <div class="cook-time">
                <span>
                    <i class="fas fa-clock"></i>
                </span>
                    <h4>${recipe.time}</h3>
            </div>

            <div class="like-basket">
                <span>
                    <i class="fas fa-shopping-basket"></i>
                </span>
            </div>
        </div>

        <div class="ingredient-info">
            <ul class="ingredient-list">
            ${recipe.ingredients.map(el => createIngredient(el)).join('')}
                
            </ul>
            <div class="ingredient-btn">
                <button class="add-to-shopping">
                    <i class="fas fa-list-ol"></i> Add to shopping list
                </button>
                <button class="cooking-directions">
              <a href="${recipe.url}" class="cooking-link" target="_blank">
                  <i class="fas fa-book-open"></i> Cooking Instructions
              </a>
          </button>
            </div>
        </div>
    `;

    elements.recipe.insertAdjacentHTML('afterbegin', markup);
};