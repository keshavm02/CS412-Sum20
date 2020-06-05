function* allFibs() {
    let [val1, val2, result] = [0, 1, 0];

    while (true) {
        if (result == 0) yield result;

        result = val1 + val2;
        [val1, val2] = [val2, result];
        yield result;
    }
}


function* evenFibs(fibs) {
    while (true) {
        let ret = fibs.next().value;
        if (ret % 2 == 0) {
            yield ret;
        }
    }
}


let fibs = allFibs();
let modifiedFibs = evenFibs(fibs);

let count = 6
while (count --> 0) {
    console.log(`Next even fibonacci number: ${modifiedFibs.next().value}`);
}