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
    var length = Object.keys(myObj).length;
    console.log(length(breeds));
}
onInit();
