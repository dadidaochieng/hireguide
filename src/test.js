// Test the depthSum function
const { depthSum } = require('./index');

test('sum nested list with depth', () => {
  const result = depthSum([1, [1, 1], 1, [1, 1, 1]]);
  const expected = 12;
  expect(result).toEqual(expected);
})

function test(title, callback) {
  try {
    console.log(`\n${title}`);
    callback();
    console.log('  success');
  } catch (error) {
    console.error(`  fail: ${error.message}`);
  }
}

function expect(actual) {
  return {
    toEqual: function(expected) {
      if (actual !== expected) {
        throw new Error(`${actual} expected ${expected}`);
      }
    }
  };
}

module.exports = { test, expect };
