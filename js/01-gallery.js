import { galleryItems } from "./gallery-items.js";
// Change code below this line

console.log(galleryItems);

const listEl = document.querySelector(".gallery");
listEl.insertAdjacentHTML('afterbegin', createMarkup(galleryItems));
listEl.addEventListener('click', hadlerClickOpen);
let instanse;

function createMarkup(arr) {
  return arr.map(({ preview, original, description }) =>
    `<li class="gallery__item">
      <a class="gallery__link" href="large-image.jpg">
        <img
          class="gallery__image"
          src="${preview}"
          data-source="${original}"
          alt="${description}"
        />
      </a>
    </li>`).join("");
}

function hadlerClickOpen(evt){
  evt.preventDefault();
  // if(evt.target === evt.currentTarget){
  //   return;
  // }

  const currentImg = evt.target;
  if(currentImg.tagName === 'IMG'){
    console.log(currentImg.dataset.source);
    instanse = basicLightbox.create(
      `<img src="${currentImg.dataset.source}">`
    );
    instanse.show();
  }
}