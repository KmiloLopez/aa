import { galleryItems } from './gallery-items.js';
import SimpleLightBox from 'SimpleLightBox';
import 'simplelightbox/dist/simple-lightbox.min.css'
// Change code below this line

console.log(galleryItems);

const phoTos = document.querySelector('.gallery')
const cards = createCards(galleryItems)

phoTos.insertAdjacentHTML('afterbegin', cards)

function createCards(img){
    return img  
    .map(
        image=>
        `<div class="gallery__item">
            <a class="gallery__link" href="${image.original}" onclick="return false;">
                <img
                    class="gallery__image"
                    src = "${image.preview}"
                    data-source="${image.original}"
                    alt="${image.description}"
                />
                </a>
                </div>
        `
    )
    .join('');
}  


