function naikAngkot(arrPenumpang) {
    var isiArray = [];
    var bayar = false;
    if (arrPenumpang === '' || arrPenumpang.length === false) {
        return '[]';
    } else {
        arrPenumpang.forEach(function (rute) {
            if (rute[1] === 'B' && rute[2] === 'F') {
                bayar = 8000
            } else if (rute[1] === 'A' && rute[2] === 'B') {
                bayar = 2000
            } else {
                bayar = false
            }
            isiArray.push('penumpang: ' + rute[0] + ', naikDari: ' + rute[1] + ', tujuan: ' + rute[2] + ', bayar: ' + bayar);
        });
        return (isiArray);
    }
}
    console.log(naikAngkot([['Dimitri', 'B', 'F'], ['Icha', 'A', 'B']]));
    console.log(naikAngkot([]))