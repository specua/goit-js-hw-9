import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

const images = [
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/06/19/13/52/flower-4284927_640.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/06/19/13/52/flower-4284927_1280.jpg',
    description: 'Hokkaido Flower',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/11/23/11/33/rose-4647752_640.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/11/23/11/33/rose-4647752_1280.jpg',
    description: 'Container Haulage Freight',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2018/01/20/14/26/beach-3095231_640.jpg',
    original:
      'https://cdn.pixabay.com/photo/2018/01/20/14/26/beach-3095231_1280.jpg',
    description: 'Aerial Beach View',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/03/14/09/36/cosmos-4055048_640.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/03/14/09/36/cosmos-4055048_1280.jpg',
    description: 'Flower Blooms',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2014/02/27/16/10/flowers-276014_640.jpg',
    original:
      'https://cdn.pixabay.com/photo/2014/02/27/16/10/flowers-276014_1280.jpg',
    description: 'Alpine Mountains',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/04/19/11/30/sailboat-4139913_640.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/04/19/11/30/sailboat-4139913_1280.jpg',
    description: 'Sailing Boat',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/14/16/43/blossom-4202820_640.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/14/16/43/blossom-4202820_1280.jpg',
    description: 'Flowering Tree',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/11/08/11/56/landscape-4612205_640.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/11/08/11/56/landscape-4612205_1280.jpg',
    description: 'Mountain Landscape',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/03/27/14/40/landscape-4085515_640.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/03/27/14/40/landscape-4085515_1280.jpg',
    description: 'Lighthouse Coast',
  },
];

const gallery = document.querySelector('.gallery');

const galleryMarkup = images
  .map(
    ({ preview, original, description }) => `
      <li class="gallery-item">
        <a class="gallery-link" href="${original}">
          <img
            class="gallery-image"
            src="${preview}"
            alt="${description}"
          />
        </a>
      </li>
    `
  )
  .join('');

gallery.insertAdjacentHTML('beforeend', galleryMarkup);

new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionPosition: 'bottom',
  captionDelay: 250,
});
