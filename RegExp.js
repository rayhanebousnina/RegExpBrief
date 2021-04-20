function hasSpace(str) {
    const patt = /\s/;
    let result = patt.test(str);
    return result;
}
console.log(hasSpace('Rayhane Emna Bousnina'));

function countVowels(str) {
    const patt = /[aeiouy]/ig
    let tab = str.match(patt)
    if (tab==null)
    return 0
    else
    return tab.length
}
console.log(countVowels('Celebration'));

function replaceVowels(str, symb) {
    const patt = /[aeiouy]/ig
    return str.replace(patt, symb)
    
}
console.log(replaceVowels('Celebration', '#'));

function mathExpr(str) {
    const patt = /[0-9\s?][+*-/%][0-9\s?]/
    return patt.test(str)
}
console.log(mathExpr("4 + 11"))

function asterisk(str) {
    const patt = /[a-z]{0,}[a][a-z]{0,}[c]{0,}[a-z]{0,}/i;

    return patt.test(str)
}
console.log(asterisk("bbbaccount"))

function zipCode(str) {
    const patt = /\b\d{5}\b/ // Solution 2 : const patt = /^[0-9][0-9][0-9][0-9][0-9]$/
    return patt.test(str)
}
console.log(zipCode("486"))