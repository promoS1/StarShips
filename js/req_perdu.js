//=========================================================================
//Traitement de "req_perdu"
//=========================================================================
"use strict";

var fs = require("fs");
require('remedial');

var trait = function (req, res, query){

	var page;

	// AFFICHAGE DE LA PAGE GAGNER

	page = fs.readfileSync('../html/page_p.html','UTF-8');

	res.writeHead(200, {'Content-Type': 'text/html'});
	res.write(page);
	res.end();
};

//--------------------------------------------------------------------------

module.exports = trait;

