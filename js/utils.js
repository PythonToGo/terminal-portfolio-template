/**
 * Pure utility functions - testable without DOM.
 * Used by main.js and exposed for unit tests.
 */
function completeQuery(arr, query) {
  return arr.filter(function (item) {
    return item.startsWith(query);
  });
}

// Expose globally for browser (loaded via script tag)
if (typeof window !== "undefined") {
  window.completeQuery = completeQuery;
}
