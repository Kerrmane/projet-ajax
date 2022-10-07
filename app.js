async function getFacts(){
    return new Promise((resolve) => {
    fetch("https://catfact.ninja/facts")
    .then(resultat => resultat.json())
    .then(resultat => {
        resolve(resultat.data);
    })
})

}



async function getBreeds() {
    return new Promise((resolve) => {
        fetch("https://catfact.ninja/breeds?limit=50")
        .then(resultat => resultat.json())
        .then(resultat => {
            resolve(resultat.data);
        })
    })
   
}
 function lengthArray(breeds){
    return breeds.length
    
}

function lengthFacts(facts){
    return facts.length 
}
async function onInit(){
    let breeds = await getBreeds();
    console.log(breeds);

    let facts = await getFacts();
    console.log(facts);

    let longeur =lengthArray(breeds)
    console.log(longeur)
    document.getElementById("breed").innerHTML = longeur;

    let longeurFacts =lengthFacts(facts)
    console.log(longeurFacts)
    document.getElementById("anecdote").innerHTML = longeurFacts;


    
    let countries = getCountries(breeds);
    console.log(countries);

    let breed = getBreed(breeds);
    console.log(breed);

    let pattern = getPattern(breeds);
    console.log(pattern);

    let coat = getCoat(breeds);
    console.log(coat);

    let origine = getOrigine(breeds);
    console.log(origine);
}
function getCountries(breeds){
    
    let pays=[];
    breeds.forEach(breed => pays.push(breed.country))
    pays = pays.filter((item, index) => pays.indexOf(item) === index);
    return pays ;
}
function getBreed (breeds){
    let breedName=[];
    breeds.forEach(breed => breedName.push(breed.breed))
    return breed ;

}
function getOrigine (breeds){
    let origine=[];
    breeds.forEach(breed => origine.push(breed.origin))
    return origine ;
    
}
function getCoat (breeds){
    let coat=[];
    breeds.forEach(breed => coat.push(breed.coat))
    return coat ;
    
}
function getPattern (breeds){
    let pattern=[];
    breeds.forEach(breed => pattern.push(breed.pattern))
    return pattern ;
    
}
 
onInit();


