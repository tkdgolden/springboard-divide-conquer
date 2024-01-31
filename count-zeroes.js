function countZeroes(array) {
	var leftIndex = 0;
	var rightIndex = array.length - 1;
	while (leftIndex <= rightIndex) {
		var midIndex = leftIndex + Math.floor((rightIndex - leftIndex) / 2);
		if (array[midIndex] === 0) {
			if (array[midIndex - 1] !== undefined) {
				if (array[midIndex - 1] === 1) {
					return array.length - midIndex;
				}
				rightIndex = midIndex - 1;
			}
			else {
				return array.length;
			}
		}
		else {
			if (array[midIndex + 1] !== undefined) {
				if (array[midIndex + 1] === 0) {
					return array.length - midIndex - 1;
				}
				leftIndex = midIndex + 1;
			}
			else {
				return 0;
			}
		}
	}
}

module.exports = {
	countZeroes: countZeroes
}