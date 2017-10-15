/**
 * Filename: HandlerFactory
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

const HandlerFactory = function (method) {
    this.process = function (req, res) {
        params = null;
        return method.apply(this, [req, res, params]);
    }
}

exports.createHandler = function (method) {
    return new HandlerFactory(method);
}