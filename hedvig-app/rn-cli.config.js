/* global __dirname module */
const path = require('path');

module.exports = {
  getProjectRoots() {
    return [path.join(__dirname, '..'), __dirname];
  },
};
