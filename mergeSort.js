function mergeSort(array) {
    if (array.length == 1) {
        return array;
    }
    //Split to two halfs and then sort them, 2nd half is in the original array
    const arrayFirstHalf = array.splice(0, Math.round(array.length / 2));
    const sortedFirstHalf = mergeSort(arrayFirstHalf);
    const sortedSecondHalf = mergeSort(array);

    //merge
    const sortedArray = [];
    while (sortedFirstHalf.length > 0 || sortedSecondHalf.length > 0) {
        if (sortedFirstHalf.length == 0) {
            sortedArray.push(sortedSecondHalf.shift());
        }
        else if (sortedSecondHalf.length == 0) {
            sortedArray.push(sortedFirstHalf.shift());
        }

        else if (sortedFirstHalf[0] < sortedSecondHalf[0]) {
            sortedArray.push(sortedFirstHalf.shift());

        } else {
            sortedArray.push(sortedSecondHalf.shift());
        }
    }
    return sortedArray;


}

console.log(mergeSort([10, 5, 3, 4, 2, 6, 4]));