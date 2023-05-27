export {fetchBreeds, fetchCatByBreed};
const API_KEY = 'live_PeQIm7clvMSlGltRB8qyWPC8h4vJpnzq15HYHXZFt4wayVOb6jvRMCRXSexktexb';
const BASE_URL = 'https://api.thecatapi.com/v1';
const SECOND_URL = 'https://api.thecatapi.com/v1/images/search';
let catId;
function fetchBreeds(){
  
    return fetch(`${BASE_URL}/breeds?api_key=${API_KEY}`)
    .then(resp =>{
    if(!resp.ok){
    throw new Error(resp.statusText)
    }
    return resp.json()
    })
    
    .then(data => {
        return data;
      })
      .catch(error => {
        console.error(error);
      })

    };
    

    function fetchCatByBreed(breedId) {
      
      
      return fetch(`${SECOND_URL}?api_key=${API_KEY}&breed_ids=${breedId}`)
        .then(resp => {
          if (!resp.ok) {
            throw new Error(resp.statusText);
          }console.log(resp);
          return resp.json();
        })
        .then(data => {
          return data;
        })
        .catch(error => {
          console.error(error);
        });
    }