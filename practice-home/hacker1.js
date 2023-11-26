var arr = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
var left = 0;
var right = 0;
for (var i = 0; i < arr.length; i++) {
    for (var j = 0; j < arr.length; j++) {
        if (i === j) {
            left = left + arr[i][j];
        }
        if (i + j === arr.length - 1)
            right = right + arr[i][j];
    }
}
console.log(right - left);
/**
 * 00 01 02 03
 * 10 11 12 13
 * 20 21 22
 */
