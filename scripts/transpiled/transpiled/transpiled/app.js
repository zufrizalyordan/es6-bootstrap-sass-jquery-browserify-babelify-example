'use strict';

var _jquery = require('jquery');

var _jquery2 = _interopRequireDefault(_jquery);

require('bootstrap');

function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : { default: obj };
}

(0, _jquery2.default)(function () {
    var updateApp = function updateApp(text) {
        (0, _jquery2.default)('#app').text(text);
    };

    updateApp('js loaded');
});