"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const unit_test_1 = require("./unit_test");
const main_1 = require("./main");
(0, unit_test_1.describe)("getMailtoLinkForEmail", () => {
    const runCases = [
        {
            email: "wayne.lagner@dev.boot",
            expected: "mailto:wayne.lagner@dev.boot",
        },
        {
            email: "heckmann@what.de",
            expected: "mailto:heckmann@what.de",
        },
    ];
    const submitCases = runCases.concat([
        {
            email: "a.liar@pants.fire",
            expected: "mailto:a.liar@pants.fire",
        },
    ]);
    let testCases = runCases;
    if (unit_test_1.withSubmit) {
        testCases = submitCases;
    }
    for (const { email, expected } of testCases) {
        (0, unit_test_1.it)(`mailto link created for ${email}`, () => {
            const actual = (0, main_1.getMailtoLinkForEmail)(email);
            unit_test_1.assert.strictEqual(actual, expected);
        });
    }
    const numSkipped = submitCases.length - testCases.length;
    if (numSkipped > 0) {
        console.log(`- Skip: ${numSkipped} test case(s) for submit`);
    }
});
