function changeVocals(string) {
    // var split = str.split('')
    // var vocal = 'aiueo'
    // var change = '@#$%^&*'
    let change = []
    let x = ""
    for (let y = 0; y < string.length; y++) {
        change.push(string.charAt(y))
    }
    // change vocal str to specialChar
    let vocal = ['a', 'i', 'u', 'o', 'e']
    let step = 0
    for (let konsonant = 0; konsonant < change.length; konsonant++) {
        for (let y = 0; y < vocal.length; y++) {
            if(change[konsonant] === vocal[y]) { if((step % 2) === 0) {
                    change[konsonant] = "$"
                }else{
                    change[konsonant] = "#"
                }
                step++
            }
        }
        x += change[konsonant]
    }
    return x
}

console.log(changeVocals("'i love javascript'"))