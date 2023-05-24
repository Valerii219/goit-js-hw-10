import {fetchBreeds} from './cat-api.js';

const select = document.querySelector('.breed-select');
select.addEventListener('change', functionSelect);
console.dir(select);

function functionSelect(evt) {
    const rrr = select.value;

    fetchBreeds()
    .then(data => {
        select.insertAdjacentHTML('beforeend', createMarkup(data.breeds));
    })
    .catch(err => console.error(err));
}

function createMarkup(arr) {
    return arr.map(({id}) => '<option value="${id}">${id}</option>)'.join(''))
}