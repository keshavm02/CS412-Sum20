const covertToAlphabeticalOrder = word => word.split('').sort().join('');

console.log(`Alphabetical order for "supercalifragilisticexpialidocious" is "${covertToAlphabeticalOrder('supercalifragilisticexpialidocious')}".`)

module.exports = {covertToAlphabeticalOrder};