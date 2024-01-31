function findRotationCount(array) {
    var leftIndex = 0;
    var rightIndex = array.length - 1;
    var min = array[leftIndex];
    while (leftIndex <= rightIndex) {
		var midIndex = leftIndex + Math.floor((rightIndex - leftIndex) / 2);
        if (array[midIndex] < min) {
            min = array[midIndex];
            if (array[midIndex - 1] < min) {
                rightIndex = midIndex - 1;
            }
            else {
                return midIndex;
            }
        }
        else {
            leftIndex = midIndex + 1;
        }
    }
    return 0;
}

module.exports = findRotationCount