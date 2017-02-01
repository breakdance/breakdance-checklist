'use strict';

var get = require('get-value');

module.exports = function(options) {
  return function(breakdance) {
    breakdance.set('input', function(node) {
      var type = get(node, 'attribs.type');
      var prefix = '';

      if (get(node.attribs, 'checked') === '') {
        type = 'checkbox checked';
      }

      if (!this.isInside(node.parent, 'li')) {
        prefix = '* ';

        var cls = get(node.parent.attribs, 'class');
        var m = /checkbox\s*(checked|active|enabled)?/.exec(cls);
        if (m) {
          type = m[1] ? 'checkbox checked' : 'checkbox';
        }
      }

      switch (type) {
        case 'checkbox checked':
        case 'checkbox active':
          this.emit(prefix + '[x] ', node);
          break;
        case 'checkbox':
          this.emit(prefix + '[ ] ', node);
          break;
        default: {
          this.emit('', node);
          break;
        }
      }
    });
  };
};
