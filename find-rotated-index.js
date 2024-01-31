function findRotatedIndex(array, target) {
    var leftIndex = 0;
    var rightIndex = array.length - 1;
    while (leftIndex <= rightIndex) {
		var midIndex = leftIndex + Math.floor((rightIndex - leftIndex) / 2);
        if (array[midIndex] === target) {
            return midIndex;
        }
        else if (array[midIndex] < target) {
            if (array[rightIndex] < target) {
                rightIndex = midIndex - 1;
            }
            else {
                leftIndex = midIndex + 1;
            }
        }
        else {
            if (array[leftIndex] > target) {
                leftIndex = midIndex + 1;
            }
            else {
                rightIndex = midIndex - 1;
            }
        }
    }
    return -1;
}

module.exports = findRotatedIndex