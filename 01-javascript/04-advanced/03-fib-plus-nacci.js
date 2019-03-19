
function fib() {
    var a = 0, b = 1, c = 1;
    function nacci() {
        console.log(c);
        c = a + b;
        a = b;
        b = c;
    }
    return nacci
}
var fibCounter = fib();
fibCounter() // should console.log "1"
fibCounter() // should console.log "1"
fibCounter() // should console.log "2"
fibCounter() // should console.log "3"
fibCounter() // should console.log "5"
fibCounter() // should console.log "8"
