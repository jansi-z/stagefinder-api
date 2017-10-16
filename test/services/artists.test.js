const assert = require('assert');
const app = require('../../src/app');

describe('\'artists\' service', () => {
  it('registered the service', () => {
    const service = app.service('artists');

    assert.ok(service, 'Registered the service');
  });
});
