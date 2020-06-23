const fs = require('fs');
const path = require('path');

function adminAuth(req, res, next){

    if(req.query.user == 'Ada' || req.query.user == 'Greta' || req.query.user == 'Vim' || req.query.user == 'Tim'){
        next();
    }
    return res.send('No tienes los privilegios para ingresar');

    //switch(req.query.) {
        //case Ada:
            //break;
        //case Greta:
            //break;
        //case Vim:
            //break;
        //case Tim:
            //break;
        //default:
    /*}*/
}

module.exports = adminAuth;