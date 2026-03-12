/**
 * CommonJS version of utils for testing.
 * Mirrors utils.js logic - keep in sync.
 */
function completeQuery(arr, query) {
  return arr.filter(function (item) {
    return item.startsWith(query);
  });
}

module.exports = { completeQuery };
