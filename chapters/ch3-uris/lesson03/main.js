function printURLParts(urlString) {
    var urlObj = new URL(urlString);
    var entriesToPrint = [
        'protocol', 'username', 'password', 'hostname', 'port', 'search', 'hash'
    ];
    for (var i = 0, len = entriesToPrint.length; i < len; i++) {
        console.log("".concat(entriesToPrint[i], ": ").concat(urlObj[entriesToPrint[i]]));
    }
    // console.log(`
    //     protocol: ${urlObj.protocol}
    //     username: ${urlObj.username}
    //     password: ${urlObj.password}
    //     hostname: ${urlObj.hostname}
    //     port: ${urlObj.port}
    //     search: ${urlObj.search}
    //     hash: ${urlObj.hash}
    // `)
}
// don't touch below this line
var jelloURL = "http://waynelagner:pwn3d@jello.app:8080/boards?sort=createdAt#id";
printURLParts(jelloURL);
// Example entry:
// http://testuser:testpass@testdomain.com:8080/testpath?testsearch=testvalue#testhash
// Output should be
// protocol: http:
// username: testuser
// password: testpass
// hostname: testdomain.com
// port: 8080
// pathname: /testpath
// search: ?testsearch=testvalue
// hash: #testhash
