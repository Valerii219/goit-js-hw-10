import { fetchBreeds, fetchCatByBreed } from './cat-api.js';
import Notiflix from 'notiflix';

const select = document.querySelector('.breed-select');
const catInfo = document.querySelector('.cat-info');
const load = document.querySelector('.loader');
const error = document.querySelector('.error');
Notiflix.Loading.init({
  className: 'notiflix-loading',
  zindex: 4000,
  backgroundColor: 'rgba(0,0,0,0.8)',
  rtl: false,
  fontFamily: 'Quicksand',
  cssAnimation: true,
  cssAnimationDuration: 400,
  clickToClose: false,
  customSvgUrl: null,
  customSvgCode: null,
  svgSize: '80px',
  svgColor: '#f87719', // Змінено на червоний колір
  messageID: 'NotiflixLoadingMessage',
  messageFontSize: '15px',
  messageMaxLength: 34,
  messageColor: '#f87719',
});

function errorN() {
  error.style.display = 'none';
}

function showLoader() {
  load.style.display = 'block';
}

function hideLoader() {
  load.style.display = 'none';
}

function hideElements() {
  select.style.display = 'none';
  catInfo.style.display = 'none';
}

function showElements() {
  select.style.display = 'block';
  catInfo.style.display = 'block';
}
reloadF();
function reloadF() {
  Notiflix.Loading.standard(`${load.textContent}`);
}
Notiflix.Loading.remove(3000);
const timeout = setTimeout(() => {
  fetch();
  showElements();
}, 1200);

async function fetch() {
  try {
  const data = await fetchBreeds();
  const markup = createMarkup(data);
  select.innerHTML = markup;
 console.log(data);
  } catch (err) {
  hideElements();
  Notiflix.Report.failure('Oops! Something went wrong! Try reloading the page!');
  }
  }

  
select.addEventListener('change', () => {
  const selectedOption = select.options[select.selectedIndex];
  const selectedValue = selectedOption.value;
  
  showLoader();
  hideElements();
  fetchCatByBreed(selectedValue)
    .then(data => {
   
      const markupInfo = createMarkupInfo(data);
      catInfo.innerHTML = markupInfo;
      if(data.length === 0){
        Notiflix.Report.failure('Oops! Something went wrong! Try reloading the page!')
         hideLoader(); 
         return;
      }
      hideLoader();
      showElements();
    })
    .catch(err => {
      Notiflix.Report.failure(
        'Oops! Something went wrong! Try reloading the page!'
      );
   
      showElements();
      hideLoader();
    })
    .finally(() => {
      if (!fetchCatByBreed().catch) {
        errorN();
        showElements();
      }
    });
});

function createMarkup(arr) {
  return arr
    .map(
      breed => `<option value="${breed.id}">${breed.name}</option>
    `
    )
    .join('');
}

function createMarkupInfo(ar) {
  return ar
    .map(
      breed => `<img class ="img" src="${breed.url}" alt="${breed.name}">
    <ul class = "item">
    <li class= "item-breed"><span class = "span">Name:</span> ${breed.breeds[0].name}</li>
    <li class= "item-breed"><span class = "span">Description:</span> ${breed.breeds[0].description}</li>
    <li class= "item-breed"><span class = "span">Temperament:</span>${breed.breeds[0].temperament}</li>
    </ul>`
    )
    .join('');
}
