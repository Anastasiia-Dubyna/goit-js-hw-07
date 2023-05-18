import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const galleryListEl = document.querySelector(".gallery");

galleryListEl.innerHTML = createGalleryListMarkup(galleryItems);

galleryListEl.addEventListener("click", onGalleryImgClick);


function createGalleryListMarkup(galleryItems) {
  return galleryItems.map(
      ({ preview, original, description }) => `<li class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</li>
`
    )
    .join("");
};

function onGalleryImgClick(event) => {
  if (!event.target.classList.contains(gallery__image)) {
    return;
  }
  
  
}

