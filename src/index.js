// Depth sum of a weighted list
function depthSum (nestedList, level = 0) {
  if (!Array.isArray(nestedList)) {
    return level * nestedList;
  }
  return nestedList.reduce((acc, item) => acc + depthSum(item, level + 1), 0);
}

module.exports = {
  depthSum
}

console.log(depthSum([1, [1, 1], 1, [1, 1, 1]]));
