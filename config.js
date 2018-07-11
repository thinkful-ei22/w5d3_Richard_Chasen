'use strict';
exports.DATABASE_URL = process.env.DATABASE_URL || 'mongodb://dbuser:dbpassword1@ds133621.mlab.com:33621/node-restaurants-app-mongoose';
exports.TEST_DATABASE_URL = process.env.TEST_DATABASE_URL || 'mongodb://localhost/test-restaurants-app';
exports.PORT = process.env.PORT || 8080;