"use strict";
// unit_test.ts
// Minimal compatible test harness for Boot.dev local use.
Object.defineProperty(exports, "__esModule", { value: true });
exports.assert = exports.withSubmit = void 0;
exports.describe = describe;
exports.it = it;
exports.withSubmit = true;
// Set to true if you want to include submit-only tests.
exports.assert = {
    strictEqual: function (actual, expected) {
        if (actual !== expected) {
            throw new Error("Expected \"".concat(actual, "\" to strictly equal \"").concat(expected, "\""));
        }
    },
    deepStrictEqual: function (actual, expected) {
        var a = JSON.stringify(actual);
        var b = JSON.stringify(expected);
        if (a !== b) {
            throw new Error("Expected deep equality:\nActual:   ".concat(a, "\nExpected: ").concat(b));
        }
    }
};
function describe(name, fn) {
    console.log("\n".concat(name));
    fn();
}
function it(name, fn) {
    try {
        fn();
        console.log("  \u2713 ".concat(name));
    }
    catch (err) {
        console.error("  \u2717 ".concat(name));
        if (err instanceof Error) {
            console.error("    ".concat(err.message));
        }
        else {
            console.error("    Unknown error");
        }
    }
}
