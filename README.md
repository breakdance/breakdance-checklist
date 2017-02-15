# breakdance-checklist [![NPM version](https://img.shields.io/npm/v/breakdance-checklist.svg?style=flat)](https://www.npmjs.com/package/breakdance-checklist) [![NPM monthly downloads](https://img.shields.io/npm/dm/breakdance-checklist.svg?style=flat)](https://npmjs.org/package/breakdance-checklist)  [![NPM total downloads](https://img.shields.io/npm/dt/breakdance-checklist.svg?style=flat)](https://npmjs.org/package/breakdance-checklist) [![Linux Build Status](https://img.shields.io/travis/breakdance/breakdance-checklist.svg?style=flat&label=Travis)](https://travis-ci.org/breakdance/breakdance-checklist)

> Plugin that adds checklist rendering support to breakdance, similar to task lists in github-flavored-markdown.

## Install

Install with [npm](https://www.npmjs.com/):

```sh
$ npm install --save breakdance-checklist
```

## Usage

```js
var Breakdance = require('breakdance');
var checklist = require('breakdance-checklist');
var bd = new Breakdance();
  .use(checklist());

console.log(bd.render('<li><input type="checkbox">Lorem ipsum</li>'));
//=> '* [ ] Lorem ipsum'
```

Visit the [breakdance documentation](http://breakdance.io) for more information about using and customizing breakdance.

## Examples

### lists

Create checkboxes from list items.

**Unchecked**

```html
<li><input type="checkbox">Lorem ipsum dolor sit amet</li>
```

Is converted to:

```
* [ ] Lorem ipsum dolor sit amet
```

**Checked**

```html
<li><input type="checkbox checked">Lorem ipsum dolor sit amet</li>
```

Is converted to:

```
* [x] Lorem ipsum dolor sit amet
```

**Full example**

```html
<ul>
  <li> <input type="checkbox"> foo </li>
  <li> <input type="checkbox" checked> bar </li>
  <li> <input type="checkbox"> baz </li>
</ul>
```

Converts to

```
* [ ] foo
* [x] bar
* [ ] baz
```

### input

Converts an HTML `input` with the `type="checkbox"` attribute.

**Unchecked**

```html
<input type="checkbox" />Lorem ipsum dolor sit amet
```

Converts to:

```
* [ ] Lorem ipsum dolor sit amet
```

**Checked**

The following:

```html
<input type="checkbox checked" />Lorem ipsum dolor sit amet
```

Converts to:

```
* [x] Lorem ipsum dolor sit amet
```

## About

### Related projects

* [breakdance-reflinks](https://www.npmjs.com/package/breakdance-reflinks): Breakdance plugin that aggregates the urls from hrefs and src attributes at the bottom of… [more](https://github.com/breakdance/breakdance-reflinks) | [homepage](https://github.com/breakdance/breakdance-reflinks "Breakdance plugin that aggregates the urls from hrefs and src attributes at the bottom of the file as reference links.")
* [breakdance-util](https://www.npmjs.com/package/breakdance-util): Utility functions for breakdance plugins. | [homepage](https://github.com/breakdance/breakdance-util "Utility functions for breakdance plugins.")

### Contributing

Pull requests and stars are always welcome. For bugs and feature requests, [please create an issue](../../issues/new).

Please read the [contributing guide](.github/contributing.md) for advice on opening issues, pull requests, and coding standards.

### Building docs

_(This project's readme.md is generated by [verb](https://github.com/verbose/verb-generate-readme), please don't edit the readme directly. Any changes to the readme must be made in the [.verb.md](.verb.md) readme template.)_

To generate the readme, run the following command:

```sh
$ npm install -g verbose/verb#dev verb-generate-readme && verb
```

### Running tests

Running and reviewing unit tests is a great way to get familiarized with a library and its API. You can install dependencies and run tests with the following command:

```sh
$ npm install && npm test
```

### Author

**Jon Schlinkert**

* [github/jonschlinkert](https://github.com/jonschlinkert)
* [twitter/jonschlinkert](https://twitter.com/jonschlinkert)

### License

Copyright © 2017, [Jon Schlinkert](https://github.com/jonschlinkert).
MIT

***

_This file was generated by [verb-generate-readme](https://github.com/verbose/verb-generate-readme), v0.4.2, on February 15, 2017._