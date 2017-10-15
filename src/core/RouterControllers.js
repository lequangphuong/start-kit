/**
 * Filename: RouterControllers
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

const handlerFactory = require('./HandlerFactory');
const fs = require('fs');
// const util = require('util');
const parser = require('url');
let handlers = {};

exports.clear = function () {
    handlers = {};
}

exports.register = function (url, method) {
    handlers[url] = handlerFactory.createHandler(method);
}

exports.route = function (req) {
    url = parser.parse(req.url, true);
    let handler = handlers[url.pathname];
    if (!handler) handler = this.missing(req)
    return handler;
}

exports.missing = function (req) {
    // Try to read the file locally, this is a security hole, yo /../../etc/passwd
    let url = parser.parse(req.url, true);
    let path = __dirname + "/public" + url.pathname
    try {
        data = fs.readFileSync(path);
        mime = req.headers.accepts || 'text/html'
        return handlerFactory.createHandler(function (req, res) {
            res.writeHead(200, { 'Content-Type': mime });
            res.write(data);
            res.end();
        });
    } catch (e) {
        console.error("No route registered for " + url.pathname);
        return handlerFactory.createHandler(function (req, res) {
            res.writeHead(404, { 'Content-Type': 'text/plain' });
            res.write("No route registered for " + url.pathname);
            res.end();
        });
    }
}