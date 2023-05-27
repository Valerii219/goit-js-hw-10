import {fetchBreeds, fetchCatByBreed} from './cat-api.js';

const select = document.querySelector('.breed-select');
const catInfo = document.querySelector('.cat-info');
const load = document.querySelector('.loader')
// load.addEventListener()



select.addEventListener('change', () => {
    const selectedOption = select.options[select.selectedIndex];
    const selectedValue = selectedOption.value;

fetchCatByBreed(selectedValue)
.then(data =>{
    const markupInfo = createMarkupInfo(data);
    catInfo.innerHTML = markupInfo;})
    .catch(err => {
        console.error(err);
        }); 
})



fetchBreeds()
.then(data => {
    const markup = createMarkup(data);
    select.innerHTML = markup;
    })
    .catch(err => {
    console.error(err);
    });


function createMarkup(arr) {

return arr
    .map(breed => `<option value="${breed.id}">${breed.name}</option>
    `)
    .join('');
}




function createMarkupInfo(ar){
    
    return ar
    .map(breed => `<ul>
      <img src="${breed.url}" alt="${breed.name}">
      <li>${breed.breeds[0].name}</li>
      <li>${breed.breeds[0].description}</li>
      <li>${breed.breeds[0].temperament}</li>
    </ul>`)
    .join('');
}