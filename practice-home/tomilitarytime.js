function tomilitary(s) {
    if (s.charAt(8) === 'A') {
        var extractedNumber = Number(s.substring(0, 2));
        if (extractedNumber < 0) {
            extractedNumber = 12 - extractedNumber;
        }
        else {
            extractedNumber = 12 - extractedNumber;
        }
        return "".concat(extractedNumber).concat(s.substring(2, s.length));
        // return extractedNumber;
    }
}
console.log(tomilitary('07:05:45AM'));
