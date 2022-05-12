//이 파일에서만 no-global-assgin ESLint 옵션을 비활성화 합니다.
/*eslint-disable bo-global-assign*/

require = require('esm')(module /*, options*/);
module.exports = require('./main.js');
