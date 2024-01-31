function findFloor(array, target) {
    console.log("start");
    var leftIndex = 0;
    var rightIndex = array.length - 1;
    while (leftIndex <= rightIndex) {
		var midIndex = leftIndex + Math.floor((rightIndex - leftIndex) / 2);
        console.log(array[midIndex]);
        if (array[midIndex] === target) {
            return target;
        }
        else if (array[midIndex] < target) {
            if (array[midIndex + 1] === target) {
                return array[midIndex + 1];
            }
            else if (array[midIndex + 1] > target || array[midIndex + 1] === undefined) {
                return array[midIndex];
            }
            else {
                leftIndex = midIndex + 1;
            }
        }
        else {
            if (array[midIndex - 1] === target) {
                return array[midIndex - 1];
            }
            else if (array[midIndex - 1] < target) {
                return array[midIndex];
            }
            else {
                rightIndex = midIndex - 1;
            }
        }
    }
    return -1;
}

module.exports = {
    findFloor: findFloor
}