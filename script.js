// heap max
function heapify(arr, N, i) {
  var largest = i; // Initialize largest as root
  var l = i * 2 + 1;
  var r = i * 2 + 2;

  // If left child is larger than root
  if (l < N && arr[l] > arr[largest]) {
    largest = l;
  }

  // If right child is larger than largest so far
  if (r < N && arr[r] > arr[largest]) {
    largest = r;
  }
  // If largest is not root
  if (largest != i) {
    var swap = arr[i];
    arr[i] = arr[largest];
    arr[largest] = swap;
    // Recursively heapify the affected sub-tree
    heapify(arr, N, largest);
  }
}
// sorting
function sort(arr) {
  var N = arr.length;
  // Build heap (rearrange array)
  for (var i = N - 1; i >= 0; i--) {
    heapify(arr, N, i);
  }

  // One by one extract an element from heap
  for (var i = N - 1; i > 0; i--) {
    // Move current root to end
    var temp = arr[0];
    arr[0] = arr[i];
    arr[i] = temp;
    // call max heapify on the reduced heap
    heapify(arr, i, 0);
  }
}

function printArray(arr) {
  var N = arr.length;
  for (var i = 0; i < N; i++) {
    console.log(arr[i]);
  }
}

var arr = [12, 11, 13, 5, 6, 7];
var N = arr.length;

console.log('before sort');
printArray(arr);
sort(arr);

console.log('after sort');

printArray(arr);

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}
