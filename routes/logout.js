const authMiddle = require("../src/middleware/auth");
const logger = require("../src/config/logger");

module.exports = function logout(app){
    app.get('/logout', authMiddle.auth, (req, res)=>{
        logger.info("Ruta: " + req.originalUrl + ' - Metodo: ' + req.method)
        const email = req.user?.email;
        req.logout(function(err){
            if(err) console.log(err);
            else res.render('pages/logout', {email });
        }) ;
    });
}