
async function main(){
 const cat = await  fetch('https://catfact.ninja/breeds?limit=12')
.then(resultat => resultat.json())
.then(json => json)
console.log(cat);
function getInfo(cat){
    const breed = data.breed ;
    const country = data.country ;
    const origin = data.origin ;
    const coat = data.coat ;
    document.querySelector('#breed').textContent = breed;
    document.getElementById("breed").innerHTML = "Hello World!";
    console.log("breed cat is : " + breed);
}



}



main();



