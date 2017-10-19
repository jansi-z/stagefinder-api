const assert = require('assert');
const sendEventToElasticsearch = require('../../src/hooks/send-event-to-elasticsearch');

describe('\'sendEventToElasticsearch\' hook', () => {
  it('runs the hook', () => {
    // A mock hook object
    const mock = {};
    // Initialize our hook with no options
    const hook = sendEventToElasticsearch();

    // Run the hook function (which returns a promise)
    // and compare the resulting hook object
    return hook(mock).then(result => {
      assert.equal(result, mock, 'Returns the expected hook object');
    });
  });
});
