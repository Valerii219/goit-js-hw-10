import {fetchBreeds,fetchCatByBreed} from './cat-api.js';

const select = document.querySelector('.breed-select');
const cotInfo = document.querySelector('.cat-info')

select.addEventListener('change', functionSelect);


fetchBreeds()
.then(data => {
const markup = createMarkup(data);
select.innerHTML = markup;
})
.catch(err => {
console.error(err);
});

function functionSelect() {
const selectedOptionValue = select.value;
if (selectedOptionValue){
    fetchCatByBreed(select.value)
    .then(data => {
        const markupInfo = `<ul>
        <img src="${breed.url}" alt="${breed.name}">
        <li>${breed.id}</li>
        <li>${breed.description}</li>
        <li>${breed.temperament}</li>
      </ul>`;
      cotInfo.insertAdjacentElement = ('beforeend', markupInfo );
        })
        .catch(err => {
        console.error(err);
        });
    }
}

function createMarkup(arr) {
return arr
    .map(breed => `<option value="${breed.id}">${breed.name}</option>
    `)
    .join('');}

function createMarkupInfo(arr){
    console.log(arr);
    return arr
    .map(breed => `<ul>
      <img src="${breed.url}" alt="${breed.name}">
      <li>${breed.id}</li>
      <li>${breed.description}</li>
      <li>${breed.temperament}</li>
    </ul>`)
    .join('');
}

