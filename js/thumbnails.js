import { multipleObject } from './data.js';

const photos = multipleObject();

const containerPhotos = document.querySelector('.pictures');
const templateWrapper = document.querySelector('#picture');
const template = templateWrapper.querySelector('a');
const fragment = document.createDocumentFragment();

photos.forEach((photo) => {
  const a = template.cloneNode(true);
  a.querySelector('.picture__img').src = photo.url;
  a.querySelector('.picture__comments').textContent = photo.comments.length;
  a.querySelector('.picture__likes').textContent = photo.likes;
  fragment.appendChild(a);
});

containerPhotos.appendChild(fragment);
