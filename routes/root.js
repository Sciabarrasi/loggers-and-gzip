const logger = require('../src/config/logger');

module.exports = function root(app) {
    app.get('/', (req, res) => {
        logger.info('Ruta: ' + req.originalUrl + ' - Método: ' + req.method)
        const email = req.user?.email
        const port = process.argv[2]
        res.render('pages/socket.ejs', { email, port });
    });
}