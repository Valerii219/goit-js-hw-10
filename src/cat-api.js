
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
    .then(data => {
        return data;
      })
      .catch(error => {
        console.error(error);
      });
    };
   
    export {fetchBreeds, fetchCatByBreed};

    function fetchCatByBreed(breedId) {
        const SECOND_URL = `https://api.thecatapi.com/v1/images/search?breed_ids=`;
        const API_KEY = 'live_PeQIm7clvMSlGltRB8qyWPC8h4vJpnzq15HYHXZFt4wayVOb6jvRMCRXSexktexb';
      
        
        return fetch(`${SECOND_URL}`)
          .then(resp => {
            if (!resp.ok) {
              throw new Error(resp.statusText);
            }
            return resp.json();
          })
          .then(data => {
            return data;
          })
          .catch(error => {
            console.error(error);
          });
      }