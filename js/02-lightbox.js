import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

//! Способ с использованием переменных

// const refs = {
//   galleryContainer: document.querySelector('.gallery'),
// };

// const createListItems = galleryItems
// .map(({ preview, original, description }) => {
//     return `<li class="gallery__item">
//     <a href="${original}" class="gallery__link">
//     <img class="gallery__image" src="${preview}" alt="${description}">
//     </a>
//     </li>`;
// })
// .join('');
// console.log(createListItems);
// populateMarkup(createListItems);
// function populateMarkup(markup) {
//     refs.galleryContainer.innerHTML = markup;
// }
// const gallery = new SimpleLightbox('.gallery a', {
//     captionsData: 'alt',
//     captionPosition: 'bottom',
//     captionDelay: 250,
// });

//! Способ с исользованием функций

const refs = {
  galleryContainer: document.querySelector('.gallery'),
};

const listItemsMakup = createListItemsMarkup(galleryItems);
populateMarkup(listItemsMakup);

const gallery = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionPosition: 'bottom',
  captionDelay: 250,
});

function createListItemsMarkup(elements) {
  return elements
    .map(({ preview, original, description }) => {
      return `<li class="gallery__item">
                  <a href="${original}" class="gallery__link">
                    <img class="gallery__image" src="${preview}" alt="${description}">
                  </a>
            </li>`;
    })
    .join('');
}

function populateMarkup(markup) {
  refs.galleryContainer.innerHTML = markup;
}
