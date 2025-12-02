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
    strictEqual(actual, expected) {
        if (actual !== expected) {
            throw new Error(`Expected "${actual}" to strictly equal "${expected}"`);
        }
    },
    deepStrictEqual(actual, expected) {
        const a = JSON.stringify(actual);
        const b = JSON.stringify(expected);
        if (a !== b) {
            throw new Error(`Expected deep equality:\nActual:   ${a}\nExpected: ${b}`);
        }
    }
};
function describe(name, fn) {
    console.log(`\n${name}`);
    fn();
}
function it(name, fn) {
    try {
        fn();
        console.log(`  ✓ ${name}`);
    }
    catch (err) {
        console.error(`  ✗ ${name}`);
        if (err instanceof Error) {
            console.error(`    ${err.message}`);
        }
        else {
            console.error("    Unknown error");
        }
    }
}
