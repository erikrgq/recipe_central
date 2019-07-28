import { elements } from './base';

export const clearShopList = () => {
    elements.shopping.innerHTML = '';
    elements.shoppingBtn.innerHTML = '';
};

export const renderItem = item => {
    const markup = `
        <li class="shop-item" data-itemid=${item.id}>
            <div class="shop-count">
                <input type="number" value="${item.count}" step="${item.count}" class="shop-count-value">
                <p>${item.unit}</p>
            </div>
            <p class="shop-description">${item.ingredient}</p>
            <button class="shop-delete">
                <i class="fas fa-minus-circle"></i>
            </button>
        </li>
    `;
    elements.shopping.insertAdjacentHTML('beforeend', markup);
};

export const renderShopBtn = recipe => {
    const markup2 = `
        <h4>How to cook it</h4>
        <p>This recipe was designed and tested by ${recipe.publisher} please check out their directions below.</p>
        <button class="cooking-directions">
            <a href="${recipe.url}" class="cooking-link" target="_blank">
                <i class="fas fa-book-open"></i> Cooking Instructions
            </a>
        </button>
    `;
    elements.shoppingBtn.insertAdjacentHTML('beforeend', markup2);
};

export const deleteItem = id => {
    const item = document.querySelector(`[data-itemid="${id}"]`);
    item.parentElement.removeChild(item);
};