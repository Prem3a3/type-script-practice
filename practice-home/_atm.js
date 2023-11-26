function atmPermission(persNumber, atmCapa, peopleMoney) {
    for (var i = 0; i < persNumber; i++)
        if (peopleMoney[i] <= atmCapa) {
            console.log("1");
            atmCapa = atmCapa - peopleMoney[i];
        }
        else
            console.log("0");
}
// atmPermission(4, 6, [10 ,8 ,6 ,4]);
atmPermission(5, 10, [3, 5, 3, 2, 1]);
