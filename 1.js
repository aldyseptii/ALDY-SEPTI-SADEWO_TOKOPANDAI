function PyramidaXOXO() {
    for (var x = 0;
         x < 6;
         x++) {
        var XO = "";
        for (var y = 0; y < 6 - x; y++) XO += " ";
        for (var z = 0; z <= x; z++) {
            if (z == x) {
                XO += "X";
            } else {
                XO += "X"+"O";
            }
        }
        console.log(XO);
    }
} PyramidaXOXO();
