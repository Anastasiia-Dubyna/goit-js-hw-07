import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);
const galleryListEl = document.querySelector(".gallery");

function createGalleryListMarkup(galleryItems) {
  return galleryItems
    .map(
      ({ preview, original, description }) => `<li class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      alt="${description}"
    />
  </a>
</li>
`
    )
    .join("");
}
