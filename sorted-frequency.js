function sortedFrequency(array, target) {
    leftIndex = 0
    rightIndex = array.len - 1
    while (leftIndex <= rightIndex) {
        midIndex = ((leftIndex + rightIndex) / 2)
        switch (midIndex.val) {
            case < target:
                leftIndex = midIndex + 1
            case > target:
                rightIndex = midIndex - 1
            case == target:
                switch ((midIndex - 1).val) {
                    
                }
        }
    }
}

module.exports = sortedFrequency