//===============MODULE GÉRANT LA CRÉATION DE LA PARTIE========================//
//  Traitement de "creer_partie"
//  Version : 16/01/2018
//  Auteur  : L'équipe de Starships
//=============================================================================//

"use strict";

var fs = require("fs");
require("remedial");

var creer_partie = function(req,res,query) {

///////////CREATION DU JOUEUR AVEC LE NOM DU JSON/////////////

var contenu = fs.readFileSync("../json/etat_partie.json");

fs.writeFileSync("etat_partie_" + query.pseudo + ".json",contenu,"UTF-8");


///////////////////// PLACEMENT BOT///////////////////////////


//////////////////////////////////////////////////////////////





///////////////PLACEMENT JOUEUR/////////////////////////////


////////////////////////////////////////////////////////////


fs.writeFileSync("etat_partie_" + query.pseudo + ".json",contenu,"UTF-8");

};

module.exports = creer_partie;
