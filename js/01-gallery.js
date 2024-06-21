import { galleryItems } from './gallery-items.js';
// Change code below this line
console.log(galleryItems);

const galeryContainer = document.querySelector('.gallery');


const galleryList = galleryItems
.map(
    ({ preview, original, description }) =>
    ` <li class="gallery__item">
    <a class="gallery__link" href=${original}>
    <img
    class="gallery__image"
    src=${preview}
    data-source=${original}
    alt=${description}
    />
    </a>
    </li>`,
    )
    .join('');
    
// console.log(galleryList);
galeryContainer.insertAdjacentHTML('beforeend', galleryList);
galeryContainer.addEventListener('click', e => {
    e.preventDefault();
    if (e.target.nodeName !== 'IMG') {
        return;
    }
    const currentImage = e.target.getAttribute('data-source')

    const instance = basicLightbox.create(`
    <img src="${currentImage}" width="800" height="600">`);

    instance.show();
    galeryContainer.addEventListener('keydown', e => {
        if (e.key === 'Escape') {
            instance.close();
        }
    })
})  