// Using global scope
let letter = 'A';
function print() { console.log(letter) };
print();
letter = 'B'
print();
/*
    A
    B
*/

// Using fn scope
// even after outerFn is invoked, innerFn saves used vars from parent scope
function outerFn(outerVar) {
    const constInOuterFn = '42';
    return function innerFn(innerVar) {
        console.log('Outer var: ' + outerVar);
        console.log('constInOuterFn: ' + constInOuterFn);
        console.log('Inner var: ' + innerVar);
    }
}

const newFn = outerFn('outside');
newFn('inner')
/* 
    Outer var: outside
    constInOuterFn: 42
    Inner var: inner 
*/

// Nested functions, print fn can access all vars from parents
function fnA(strA) {
    const A = 'A';
    return function fnB(strB) {
        const B = 'B';
        return function fnC(strC) {
            const C = 'C'
            return function fnD(strD) {
                const D = 'D'
                return function print() {
                    console.log('A', strA + A);
                    console.log('B', strB + B);
                    console.log('C', strC + C);
                    console.log('D', strD + D);
                }
            }
        }
    }
}
fnA(1)(2)(3)(4)();
/*
    A 1A
    B 2B
    C 3C
    D 4D
*/