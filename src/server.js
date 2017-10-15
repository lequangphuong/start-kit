/**
 * Filename: server
 *
 * Copyright © 2017 lequangphuong. All rights reserved
 * 
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 *
 *
 * @version 1.0.0
 * @author  lequangphuong
 * @updated 15 Oct 2017
 *
 */

let config = require('./config');
let http = require('http');
let initRoutes = require('./routers/index');
let routerControllers = require('./core/RouterControllers');

// Handle your routes here, put static pages in ./public and they will server
initRoutes(routerControllers);

// We need a server which relies on our router
var server = http.createServer(function (req, res) {
    handler = routerControllers.route(req);
    handler.process(req, res);
});

server.listen(config.PORT, config.HOST_NAME.SERVER, () => {
    console.log(`Server running at http://${config.HOST_NAME.SERVER}:${config.PORT}`);
});