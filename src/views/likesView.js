import { elements } from './base';

export const toggleLikeBtn = isLiked => {
    const iconString = isLiked ? '#CF3E01' : '#FFB904';
    document.getElementById('like-btn').setAttribute('style', `color: ${iconString};`);
};