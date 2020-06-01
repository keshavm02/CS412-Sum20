const covertToAlphabeticalOrder = require('../PS1/PS1.P1').covertToAlphabeticalOrder;
const evaluate = require('../PS1/PS1.P2').evaluate;
const function3 = require('../PS1/PS1.P3').function3;

const {describe, it} = require('../node_modules/mocha'); //mochajs.org for docs  (runner)
const {expect} = require('../node_modules/chai'); //chaijs.com for docs (individual tests)

describe('Testing problem 1:', () => {
    it('should return "abcdef"', function () {
        let ret = covertToAlphabeticalOrder('fadbce');
        expect(ret).to.be.equal('abcdef');
    });

    it('should return "uvwxyz"', function () {
        let ret = covertToAlphabeticalOrder('wzyuvx');
        expect(ret).to.be.equal('uvwxyz');
    });

    it('should return "aaacccdeefgiiiiiiillloopprrssstuux"', function () {
        let ret = covertToAlphabeticalOrder('supercalifragilisticexpialidocious');
        expect(ret).to.be.equal('aaacccdeefgiiiiiiillloopprrssstuux');
    });
});

describe("Testing problem 2:", () => {
    it('should return "72"', function () {
        let ret = evaluate('8*9');
        expect(ret).to.be.equal(72);
    });

    it('should return "6"', function () {
        let ret = evaluate('9-3');
        expect(ret).to.be.equal(6);
    });

    it('should return "3"', function () {
        let ret = evaluate('9/3');
        expect(ret).to.be.equal(3);
    });
});

describe("Testing problem 3:", () => {
    it('should return "olleh"', function () {
        let ret = function3('hello', function reverseString(s) {
            return s.split('').reverse().join('');
        });
        expect(ret).to.be.equal('olleh');
    });

    it('should return "U n i v e r s i t y"', function () {
        let ret = function3('University', function spaceOutWord(s) {
            return s.split('').join(' ');
        });
        expect(ret).to.be.equal('U n i v e r s i t y');
    });

    it('should return "{\n' +
        '            originalString: \'javascript\',\n' +
        '            reversedString: \'tpircsavaj\',\n' +
        '            spacedOutString: \'j a v a s c r i p t\',\n' +
        '            stringInListForm: [\'j\', \'a\', \'v\', \'a\', \'s\', \'c\', \'r\', \'i\', \'p\', \'t\'],\n' +
        '            stringLength: 10\n' +
        '        }"', function () {
        let ret = function3('javascript', function getObject(s) {
            const originalString = s;
            const reversedString = s.split('').reverse().join('');
            const spacedOutString = s.split('').join(' ');
            const stringInListForm = s.split('');
            const stringLength = s.length;

            const ret = {
                originalString: s,
                reversedString: reversedString,
                spacedOutString: spacedOutString,
                stringInListForm: stringInListForm,
                stringLength: stringLength
            };
            return ret;
        });
        expect(ret).to.eql({
            originalString: 'javascript',
            reversedString: 'tpircsavaj',
            spacedOutString: 'j a v a s c r i p t',
            stringInListForm: ['j', 'a', 'v', 'a', 's', 'c', 'r', 'i', 'p', 't'],
            stringLength: 10
        });
    });
});