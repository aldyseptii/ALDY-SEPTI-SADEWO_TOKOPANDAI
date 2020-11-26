let str = "";

/** --------------

 *
 **
 ***
 ****
 *****
 ******
 *******
 ********
 *********

 let y < 11;

 let x < 11;
 ----------------*/
function tukar(str) {
    let tukarKata = "";
    for (let x = str.length - 1; x >= 0; x--) {
        tukarKata += str[x];
    }
    return tukarKata;
}

rightPyramid("javascript");

function rightPyramid(str) {
    const len = str.length;
    const blank = " ";

    for (let x = 0; x < len; x++) {
        let acak = "";
        let substring = str.substring(len - x - 1, len);

        for (let j = len; j > x; j--) {
            acak += blank;
        }

        acak += x % 2 === 1 ? substring : tukar(substring);
        console.log(acak);
    }
}