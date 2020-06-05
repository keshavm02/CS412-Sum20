function* wordGen(sentence) {
    let words = sentence.split(' ');

    yield* words;
}

const words = wordGen('All I know is something like a bird within her sang');

let item;
let word;
let isDone;

while (true) {
    item = words.next();
    word = item.value;
    isDone = item.done;

    if (isDone) break;

    console.log(word);
}