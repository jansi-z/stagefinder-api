const assert = require('assert');
const app = require('../../src/app');

describe('\'dates\' service', () => {
  it('registered the service', () => {
    const service = app.service('dates');

    assert.ok(service, 'Registered the service');
  });
});
