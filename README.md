# Safe `require()`

[![dependencies](https://david-dm.org/tallesl/safe-require.png)](https://david-dm.org/tallesl/safe-require)
[![devDependencies](https://david-dm.org/tallesl/safe-require/dev-status.png)](https://david-dm.org/tallesl/safe-require#info=devDependencies)
[![npm module](https://badge.fury.io/js/safe-require.png)](http://badge.fury.io/js/safe-require)

[![npm](https://nodei.co/npm/safe-require.png?mini=true)](https://nodei.co/npm/safe-require/)

[A function](index.js) that acts pretty much like [`require()`](http://nodejs.org/api/globals.html#globals_require) but with the difference of returning *undefined* when the module is not found (instead of throwing *Cannot find module*).

This was useful for me when loading optional JSON configuration files.

## Usage

```javascript
$ npm install safe-require
safe-require@1.0.0 node_modules/safe-require
$ node
> var safeRequire = require('safe-require')
undefined
> safeRequire('url') // loads any module, local or not, just as require()
{ parse: [Function: urlParse],
  resolve: [Function: urlResolve],
  resolveObject: [Function: urlResolveObject],
  format: [Function: urlFormat],
  Url: [Function: Url] }
> safeRequire('nonexistent') // require('nonexistent') would throw "Cannot find module 'nonexistent'"
undefined
```
