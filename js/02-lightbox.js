import { galleryItems } from './gallery-items.js';
// Change code below this line
const galleryRef = document.querySelector(".gallery");

const createGalleryItems = galleryItems.map((item) => 
    `<div class="gallery__item">
  <a class="gallery__item" href="${item.original}">
    <img
      class="gallery__image"
      src="${item.preview}"
      alt="${item.description}"
    />
  </a>
</div>`).join('');

galleryRef.insertAdjacentHTML("beforeend", createGalleryItems);



const gallery = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
  captionPosition: 'bottom',
});


console.log(galleryItems);


