function calculateOccurrencesWithinTerm(frequencyObj, to_datetime, onlyCountOfClasses) {
    if (onlyCountOfClasses === void 0) { onlyCountOfClasses = true; }
    var frequency = frequencyObj.frequency, repeatEvery = frequencyObj.repeatEvery, repeatOn = frequencyObj.repeatOn;
    var currentDate = new Date(frequencyObj.from);
    var classEndTime = new Date(frequencyObj.to);
    var termEndDate = new Date(to_datetime);
    var occurrences = [];
    while (currentDate <= termEndDate) {
        // Check if the current day of the week (0 for Sunday, 1 for Monday, etc.)
        // is in the repeatOn array if the interval is weeks.
        if (frequency == 2 && repeatOn.indexOf(currentDate.getDay() + 1) === -1) {
            currentDate.setDate(currentDate.getDate() + 1);
            classEndTime.setDate(currentDate.getDate() + 1); // Move to the next day.
            continue;
        }
        if (frequency == 1) {
            currentDate.setDate(currentDate.getDate() + repeatEvery);
            classEndTime.setDate(classEndTime.getDate() + repeatEvery);
        }
        else if (frequency == 2) {
            currentDate.setDate(currentDate.getDate() + repeatEvery * 7);
            classEndTime.setDate(classEndTime.getDate() + repeatEvery * 7);
        }
        // Add date to the occurrence.
        occurrences.push({
            start: new Date(currentDate),
            end: new Date(classEndTime),
        });
    }
    if (onlyCountOfClasses) {
        return occurrences.length;
    }
    return occurrences;
}
/**
 *  { "from": "2023-12-07T14:00:00+00:00", "to": "2023-12-07T17:00:00+00:00", "interval": 1, "neverEnd": false, "endDate": null, "endAfterOccurrences": 20, "frequency": 1, "repeatEvery": 1 }
 */
var a = calculateOccurrencesWithinTerm({
    from: new Date("2023-12-07T14:00:00+00:00"),
    to: new Date("2023-12-07T17:00:00+00:00"),
    frequency: 1,
    repeatEvery: 3,
    repeatOn: [2, 3],
}, new Date("2023-12-17T17:00:00+00:00"), false);
if (Array.isArray(a) && a.length < 20) {
    console.log("occurnces exceeded");
}
if (Array.isArray(a)) {
    a.splice(30, a.length);
}
if (typeof a === "number" && a < 20) {
    console.log("throw ErrorConstants.CONST_ERROR_BATCH_OCCURRENCES_HAS_EXCEEDED;");
}
console.log(a);
