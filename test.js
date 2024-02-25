import {
  PriorityQueue,
  MinPriorityQueue,
} from "@datastructures-js/priority-queue";

var kClosest = function (points, k) {
  points.forEach((p) => {
    p.push(p[0] * p[0] + p[1] * p[1]);
  });

  const minHeap = PriorityQueue.fromArray(points, (a, b) => a[2] > b[2]);
  console.log(minHeap.toArray());
  return minHeap
    .toArray()
    .slice(0, k)
    .map((p) => p.slice(0, 2));

  // O(Nlog(K)) time O(N) space
};

console.log(
  kClosest(
    [
      [3, 3],
      [5, -1],
      [-2, 4],
    ],
    2
  )
);

const getMaxCompare = (getCompareValue) => (a, b) => {
  const aVal = typeof getCompareValue === "function" ? getCompareValue(a) : a;
  const bVal = typeof getCompareValue === "function" ? getCompareValue(b) : b;
  return aVal < bVal ? 1 : -1;
};

// console.log(getMaxCompare((a) => a[0])([5, 4], [4, 5]));
