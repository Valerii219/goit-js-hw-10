import {fetchBreeds} from './cat-api.js';


const select = document.querySelector('.breed-select');
select.addEventListener('change', functionSelect);
console.dir(select);

functionSelect()

function functionSelect(evt){
    const {id} = select.value;

fetchBreeds()
.then(data => select.insertAdjacentHTML = console.log(select.insertAdjacentHTML('beforeend', createMarkup(data.breeds))  ))
.catch(err => console.error(err)
)

}
function createMarkup(arr) {
    return arr.map(({id}) => 
    `<option value="ddd">"ggg"</option>`)
    .join('')
   
}