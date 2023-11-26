function Pattern1(n) {
    for (var i = 0; i < n; i++) {
        for (var j = 0; j < n; j++) {
            // console.log(i+" "+j);
            process.stdout.write("#");
        }
        console.log();
    }
}
Pattern1(6);
