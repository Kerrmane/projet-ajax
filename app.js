async function getBreeds() {
    return new Promise((resolve) => {
        fetch("https://catfact.ninja/breeds?limit=50")
        .then(resultat => resultat.json())
        .then(resultat => {
            resolve(resultat.data);
        })
    })
   
}

async function onInit(){
    let breeds = await getBreeds();
    let length = breeds.length
    console.log(length)
}
onInit();
