const cubed = value => value ** 3;

const numbers = [1, 2, 3, 4, 5, 6, 7];

const mapped = numbers.map(x => cubed(x));
console.log(`[1, 2, 3, 4, 5, 6, 7] cubed is: [${mapped}`);