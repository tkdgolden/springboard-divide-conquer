function sortedFrequency(array, target) {
    var targetLeftIndex = findLeft(array, target);
    var targetRightIndex = findRight(array, target);

    if (targetLeftIndex === undefined || targetRightIndex === undefined) {
        return -1;
    }
    return targetRightIndex - targetLeftIndex + 1;
}

function findLeft(array, target) {
    var leftIndex = 0;
	var rightIndex = array.length - 1;
	while (leftIndex <= rightIndex) {
		var midIndex = leftIndex + Math.floor((rightIndex - leftIndex) / 2);
		if (array[midIndex] === target) {
			if (array[midIndex - 1] !== undefined) {
				if (array[midIndex - 1] < target) {
					return midIndex;
				}
				rightIndex = midIndex - 1;
			}
			else {
				return midIndex;
			}
		}
		else if (array[midIndex] < target) {
            if (array[midIndex + 1] !== undefined) {
                if (array[midIndex + 1] === target) {
                    return midIndex + 1;
                }
                else {
                    leftIndex = midIndex + 1;
                }
            }
            else {
                return midIndex;
            }
		}
        else {
            rightIndex = midIndex - 1;
        }
	}
}

function findRight(array, target) {
    var leftIndex = 0;
	var rightIndex = array.length - 1;
	while (leftIndex <= rightIndex) {
		var midIndex = leftIndex + Math.floor((rightIndex - leftIndex) / 2);
		if (array[midIndex] === target) {
			if (array[midIndex + 1] !== undefined) {
				if (array[midIndex + 1] > target) {
					return midIndex;
				}
				leftIndex = midIndex + 1;
			}
			else {
				return midIndex;
			}
		}
		else if (array[midIndex] > target) {
            if (array[midIndex - 1] !== undefined) {
                if (array[midIndex - 1] === target) {
                    return midIndex - 1;
                }
                else {
                    rightIndex = midIndex - 1;
                }
            }
            else {
                return midIndex;
            }
		}
        else {
            leftIndex = midIndex + 1;
        }
	}
}

module.exports = sortedFrequency