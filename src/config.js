/**
 * Filename: config
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

if (process.env.brower) {
    throw new Error('Do not import `config.js` file into client-side code.')
}

const DEFAULT_PORT = 3000;

module.exports = {
    // port of project
    PORT: process.env.port || DEFAULT_PORT,

    // API gateway
    HOST_NAME: {
        // URL to be used in client-side code
        CLIENT: process.env.HOST_NAME_CLIENT || '',
        // URl to be used in server-side code
        SERVER: process.env.HOST_NAME_SERVER || 'localhost'
    }
}