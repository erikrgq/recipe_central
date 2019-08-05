import { elements } from './base';
import { limitRecipeTitle } from './searchView';

export const toggleLikeBtn = isLiked => {
    const iconString = isLiked ? '#CF3E01' : '#FFB904';
    document.getElementById('like-btn').setAttribute('style', `color: ${iconString};`);
};

export const toggleLikesMenu = numberLikes => {
    elements.likesMenuBtn.style.visibility = numberLikes > 0 ? 'visible' : 'hidden';
};

export const renderLike = like => {
    const markup = `
        <li>
            <a class="likes-link" href="#${like.id}">
            <figure class="likes-fig">
                <img src="${like.img}" alt="${like.title}">
            </figure>  
            <div class="likes-title">
                <h3>${limitRecipeTitle(like.title)}</h3>
                <p>${like.publisher}</p>
            </div>
            </a>
        </li>
    `;
    elements.likesList.insertAdjacentHTML('beforeend', markup);
};

export const deleteLike = id => {
    const el = document.querySelector(`.likes-link[href="#${id}"]`).parentElement;
    if(el) el.parentElement.removeChild(el);

};