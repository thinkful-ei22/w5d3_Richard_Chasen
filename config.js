'use strict';
exports.DATABASE_URL = process.env.DATABASE_URL || 'mongodb://user2:ASDF1234@ds231951.mlab.com:31951/my-first-mlab-db';
exports.TEST_DATABASE_URL = process.env.TEST_DATABASE_URL || 'mongodb://localhost/test-restaurants-app';
exports.PORT = process.env.PORT || 8080;