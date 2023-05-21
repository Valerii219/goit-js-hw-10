
function fetchCountries(name){
    fetch('https://restcountries.com/v3.1/all').then(response => {
        return response.json();
    }).then(contry => {
        console.log(contry);
    }).catch(error => {
        console.log(error);
    })
}

export {fetchCountries};