/// <reference path="bundle/main.d.ts" />
import test = require('tape');

test('a test', (t) => {
  t.plan(1);
  t.comment('test');
  t.assert(1 === 1);
});
