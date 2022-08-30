import { galleryItems } from './gallery-items.js';
// Change code below this line
const galleryRef = document.querySelector(".gallery");

const createGalleryItems = galleryItems.map((item) => 
    `<div class="gallery__item">
  <a class="gallery__link" href="${item.original}">
    <img
      class="gallery__image"
      src="${item.preview}"
      data-source="${item.original}"
      alt="${item.description}"
    />
  </a>
</div>`).join('');

galleryRef.insertAdjacentHTML("beforeend", createGalleryItems);

console.log(galleryItems);
