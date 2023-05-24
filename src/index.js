import {fetchBreeds,fetchCatByBreed} from './cat-api.js';

const select = document.querySelector('.breed-select');
const cotInfo = document.querySelector('.cat-info')

select.addEventListener('change', functionSelect);

console.dir(select.selectedIndex);
function functionSelect(e) {
    
    const selectedOptionValue = select.value;
    
    if (selectedOptionValue) {
        fetchBreeds()
    .then(data => {
    const markup = createMarkup(data);
    select.innerHTML = markup;
    })
    .catch(err => {
    console.error(err);
    });
    }
    
    
}
fetchBreeds()
.then(data => {
const markup = createMarkup(data);
select.innerHTML = markup;
})
.catch(err => {
console.error(err);
});
functionSelect();

function createMarkup(arr) {
return arr
    .map(breed => `<option value="${breed.id}">${breed.name}</option>`)
    .join('');
}
fetchCatByBreed()
catInfo()
function catInfo() {
    fetchCatByBreed()
    .then(data => {
        const markupInfo = createMarkupInfo(data);
        cotInfo.innerHTML = markupInfo;
        })
        .catch(err => {
        console.error(err);
        });
}
fetchCatByBreed(select.value)
.then(data => {
    const markupInfo = createMarkupInfo(data);
    cotInfo.innerHTML = markupInfo;
    })
    .catch(err => {
    console.error(err);
    });
function createMarkupInfo(arr){
    return arr
    .map(breed => `<ul><img src ='${breed.url}'  alt = ><li>'${breed.id}'</li><li>'${breed.description}'</li><li>'${breed.temperament}'</li></ul>`)
    .join('');
}
