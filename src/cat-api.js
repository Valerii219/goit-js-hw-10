
function fetchBreeds(){
    const BASE_URL = 'https://api.thecatapi.com/v1';
    const API_KEY = 'live_PeQIm7clvMSlGltRB8qyWPC8h4vJpnzq15HYHXZFt4wayVOb6jvRMCRXSexktexb';
    return fetch(`${BASE_URL}/breeds?key=${API_KEY}`)
    .then(resp =>{console.log(resp)
    if(!resp.ok){
    throw new Error(resp.statusText)
    }
    return resp.json()
    })
    };
   
    export {fetchBreeds, fetchCatByBreed};

   function fetchCatByBreed(breedId){
const SECOND_URL = 'https://api.thecatapi.com/v1/images/search';
const API_KEY = 'live_PeQIm7clvMSlGltRB8qyWPC8h4vJpnzq15HYHXZFt4wayVOb6jvRMCRXSexktexb';
return fetch(`${SECOND_URL}?key=${API_KEY}/breed_ids=beng/`)
    .then(resp =>{console.log(resp)
    if(!resp.ok){
    throw new Error(resp.statusText)
    }
    return resp.json()
    })

    }