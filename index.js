// modules internes
const fs = require('fs');
const path = require('path');

// lecture contenu d'un fichier
const fichier = fs.readFileSync('./README.md', {encoding:'utf-8'}).toString()
console.log(fichier)

// écriture d'une chaine dans un fichier
fs.writeFileSync('./lisezmoi.md', 'readme!');
fs.appendFileSync('./lisezmoi.md', ' lisez moi!');
fs.appendFileSync('./lisez.md', '\n lisez moi!');
// créer un dossier s'il n'existe pas
var dir = 'public';
if (fs.existsSync(dir)) {
    console.log('Existe déjà')
} else {
    fs.mkdirSync(dir);
}
// if en mode ternaire
(fs.existsSync(dir)) ? console.log('Existe déjà') : fs.mkdirSync(dir);

// chemin vers un fichier ou dossier
console.log( path.join(__dirname,'components','app/','fichier.js'));
console.log( __dirname );
console.log( __filename );