function printURLParts(urlString) {
    var urlObj = new URL(urlString);
    /* const entriesToPrint: string[] = [
        'protocol', 'username', 'password', 'hostname', 'port', 'pathname', 'search', 'hash'
    ]; */
    var entriesToPrint = [
        'protocol', 'username', 'password', 'hostname', 'port', 'pathname', 'search', 'hash'
    ];
    for (var i = 0, len = entriesToPrint.length; i < len; i++) {
        console.log("".concat(entriesToPrint[i], ": ").concat(urlObj[entriesToPrint[i]]));
    }
}
// don't touch below this line
var jelloURL = "http:localhost:8000";
printURLParts(jelloURL);
// Example entry:
// http://testuser:testpass@testdomain.com:8080/testpath?testsearch=testvalue#testhash
