import {fetchBreeds, fetchCatByBreed} from './cat-api.js';

const select = document.querySelector('.breed-select');
const catInfo = document.querySelector('.cat-info');
const load = document.querySelector('p.loader');
const error = document.querySelector('.error');



function showLoader(){
    load.style.display = 'block';
}

function hideLoader(){
load.style.display = 'none';
}

function hideElements(){
select.style.display = 'none';
catInfo.style.display = 'none'}

function showElements(){
select.style.display = 'block';
catInfo.style.display = 'block'}

function workLoader() {
    
showLoader();
fetchBreeds()
.then(data => {
    const markup = createMarkup(data);
    select.innerHTML = markup;
    })
    .catch(err => {
       if(error.style.display = 'block') {
        hideLoader()
       }
        
        
    })
.finally(()=>{
 hideLoader()
 })
 
    }
    workLoader()
    
 select.addEventListener('change', () => {
    
    const selectedOption = select.options[select.selectedIndex];
    const selectedValue = selectedOption.value;
    
    
 showLoader()
 hideElements()
fetchCatByBreed(selectedValue)
.then(data =>{
    const markupInfo = createMarkupInfo(data);
    catInfo.innerHTML = markupInfo;})
    .catch(err => { if(error.style.display = 'block') {
        hideLoader()
       }
    
        
        }).finally(()=>{
 hideLoader();
 showElements()
 
        })
})



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