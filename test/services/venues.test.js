const assert = require('assert');
const app = require('../../src/app');

describe('\'venues\' service', () => {
  it('registered the service', () => {
    const service = app.service('venues');

    assert.ok(service, 'Registered the service');
  });
});
