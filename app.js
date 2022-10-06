
function main(){
 const cat =   fetch('https://catfact.ninja/fact?max_length=140')
.then(resultat => resultat.json())
.then(json => json)
console.log(cat);

}
main();
