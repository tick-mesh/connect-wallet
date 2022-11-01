'use strict';

const eth = require('..');
const assert = require('assert').strict;

assert.strictEqual(eth(), 'Hello from eth');
console.info("eth tests passed");
