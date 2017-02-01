'use strict';

require('mocha');
var assert = require('assert');
var checklist = require('..');
var Breakdance = require('breakdance');

describe('breakdance-checklist', function() {
  it('should export a function', function() {
    assert.equal(typeof checklist, 'function');
  });

  var tests = [
    {
      it: 'should create a checkbox from an input',
      fixture: '<input type="checkbox">Lorem ipsum dolor sit amet',
      expected: '* [ ] Lorem ipsum dolor sit amet\n'
    },
    {
      it: 'should create a checked checkbox from an input',
      fixture: '<input type="checkbox checked">Lorem ipsum dolor sit amet',
      expected: '* [x] Lorem ipsum dolor sit amet\n'
    },
    {
      it: 'should create a checkbox from a list item',
      fixture: '<li><input type="checkbox">Lorem ipsum dolor sit amet</li>',
      expected: '* [ ] Lorem ipsum dolor sit amet\n'
    },
    {
      it: 'should create a checked checkbox from a list item',
      fixture: '<li><input type="checkbox checked">Lorem ipsum dolor sit amet</li>',
      expected: '* [x] Lorem ipsum dolor sit amet\n'
    },
    {
      it: 'should create a checkbox from list item `type`',
      fixture: '<ul><li><input type="checkbox">Lorem ipsum dolor sit amet</li></ul>',
      expected: '* [ ] Lorem ipsum dolor sit amet\n'
    },
    {
      it: 'should create a checked checkbox from list item `type`',
      fixture: '<ul><li><input type="checkbox checked">Lorem ipsum dolor sit amet</li></ul>',
      expected: '* [x] Lorem ipsum dolor sit amet\n'
    },
    {
      it: 'should work when the input is nested in other tags within the `<li>`',
      fixture: `
      <ul>
        <li><span><input type="checkbox checked">Lorem ipsum dolor sit amet</span></li>
        <li><span><div><input type="checkbox">Lorem ipsum dolor sit amet</div></span></li>
      </ul>`,
      expected: '* [x] Lorem ipsum dolor sit amet\n* [ ] Lorem ipsum dolor sit amet\n'
    },
    {
      it: 'should create an active checkbox from list item `type`',
      fixture: '<ul><li><input type="checkbox active">Lorem ipsum dolor sit amet</li></ul>',
      expected: '* [x] Lorem ipsum dolor sit amet\n'
    },
    {
      it: 'should create a checkbox from the class on a parent div',
      fixture: [
        '<div class="ui checkbox">',
        '  <input type="checkbox" name="example">',
        '  <label>Make my profile visible</label>',
        '</div>'
      ].join('\n'),
      expected: '* [ ] Make my profile visible\n'
    },
    {
      it: 'should create a checked checkbox from the class on a parent div',
      fixture: [
        '<div class="ui checkbox checked">',
        '  <input type="checkbox" name="example">',
        '  <label>Make my profile visible</label>',
        '</div>'
      ].join('\n'),
      expected: '* [x] Make my profile visible\n'
    },
    {
      it: 'should toggle state using the `checked` attribute',
      fixture: [
        '<ul class="contains-task-list">',
        '  <li class="task-list-item">',
        '    <input type="checkbox" class="task-list-item-checkbox"> foo',
        '  </li>',
        '  <li class="task-list-item">',
        '    <input type="checkbox" class="task-list-item-checkbox" checked=""> bar',
        '  </li>',
        '  <li class="task-list-item">',
        '    <input type="checkbox" class="task-list-item-checkbox"> baz',
        '  </li>',
        '</ul>'
      ].join('\n'),
      expected: '* [ ] foo\n* [x] bar\n* [ ] baz\n'
    },
    {
      it: 'should support boolean attributes',
      fixture: [
        '<ul>',
        '  <li>',
        '    <input type="checkbox"> foo',
        '  </li>',
        '  <li>',
        '    <input type="checkbox" checked> bar',
        '  </li>',
        '  <li>',
        '    <input type="checkbox"> baz',
        '  </li>',
        '</ul>'
      ].join('\n'),
      expected: '* [ ] foo\n* [x] bar\n* [ ] baz\n'
    }
  ].forEach(function(test) {
    var bd = new Breakdance()
      .use(checklist())

    it(test.it, function() {
      assert.equal(bd.render(test.fixture), test.expected);
    });
  });
});
