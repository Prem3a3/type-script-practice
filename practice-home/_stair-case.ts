function Pattern1(n:number)
{
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            // console.log(i+" "+j);
            process.stdout.write(`#`);
        }
        console.log();
        
    }
}

Pattern1(6);