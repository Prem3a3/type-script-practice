function minMax(arr) {
    var sortedNumbers = arr.sort();
    var min = 0;
    var max = 0;
    for (var i = 0; i < sortedNumbers.length - 2; i++) {
        min = min + sortedNumbers[i];
    }
    for (var i = sortedNumbers.length - 1; i >= 1; i--) {
        max = max + sortedNumbers[i];
    }
    console.log(max + " " + min);
}
minMax([1, 2, 3, 4, 5]);
