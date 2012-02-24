/*
 * fixtures.js: Test fixtures for the `errs` module.
 *
 * (C) 2012, Nodejitsu Inc.
 * MIT LICENSE
 *
 */
 
var util = require('util');

var fixtures = exports;

fixtures.NamedError = function (msg) {
  this.message = msg;
  this.named = true;
};

util.inherits(fixtures.NamedError, Error);