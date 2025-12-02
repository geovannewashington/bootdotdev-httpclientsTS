function printURLParts(urlString: string): void {
    const urlObj = new URL(urlString);
    /* const entriesToPrint: string[] = [
        'protocol', 'username', 'password', 'hostname', 'port', 'pathname', 'search', 'hash'
    ]; */
    
    const entriesToPrint: string[] = [
        'protocol', 'username', 'password', 'hostname', 'port', 'pathname', 'search', 'hash'
    ];
    
    for (let i = 0, len = entriesToPrint.length; i < len; i++) {
        console.log(`${entriesToPrint[i]}: ${urlObj[entriesToPrint[i] as keyof URL]}`);
    }
}

// don't touch below this line

const jelloURL = "http:localhost:8000";
printURLParts(jelloURL);

// Example entry:
// http://testuser:testpass@testdomain.com:8080/testpath?testsearch=testvalue#testhash
