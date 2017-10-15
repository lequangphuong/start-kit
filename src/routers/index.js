/**
 * Filename: index
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

module.exports = function (routerControllers) {
    routerControllers.register('/', function (req, res) {
        res.writeHead(200, { 'Content-Type': 'text/plain' });
        res.write('Hello World');
        res.end();
    });
}