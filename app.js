
function main(){
    fetch('https://api64.ipify.org?format=json')
.then(resultat => resultat.json())
;

}
main();
