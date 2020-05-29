const function3 = (str, func) => func(str);

const expression1 = function3("supercalifragilisticexpialidocious", function separator(s) {
    let splitList = s.replace(/c/g, '.c').split('.');

    // let i = null;
    // for (i=1;i<splitList.length;i++) {
    //     splitList[i] = 'c'+splitList[i];
    // }

    return splitList;
});

console.log(expression1)

const expression2 = function3("supercalifragilisticexpialidocious", function capitalizeA(s) {
    const modifiedString = s.replace(/a/g, 'A');
    const numberReplaced = modifiedString.split('A').length-1;
    const length = s.length;

    const ret = {
        originalString: s,
        modifiedString: modifiedString,
        numberReplaced: numberReplaced,
        length: length
    }
    return ret
});

console.log(expression2);