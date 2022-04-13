async function getCountry () {
    const country = await fetch('https://restcountries.com/v3.1/all')
        .then(res => res.json())
        .catch(err => console.log(err))

    return country;
}


export{getCountry}
