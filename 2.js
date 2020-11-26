function sittingArrangement(person, column) {
    let x = [ ];
    let y = [ ];
    if (column < 1) {
        return "Invalid number";
    } else {
        for ( let w = 0; w < person.length; w++ ) {
            if (person.length % column > 0) {
                person.push("Kursi KOsong");
            }
        }
        for (let z = 0; z < person.length; z++) {
            x.push(person[z]);
            if (x.length == column) {
                y.push(x);
                x = [ ];
            }
        }
    }
    return y;
}
console.log(sittingArrangement(['X', 'Y', 'Z'], 0));
console.log(sittingArrangement(['Lukman', 'Adam', 'Dimas', 'Hansin', 'Orion'], 4));