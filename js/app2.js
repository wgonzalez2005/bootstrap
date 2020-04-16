function color() {
    var g = "0123456789ABCDEF";
    var c = "#";
    while (true) {
        c += g[aleatorio(15)];
        if (c.length == 7) {
            break;
        }
    }
    return c;
}

function aleatorio(x) {
    return Math.floor(Math.random() * x);
}