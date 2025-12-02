"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var unit_test_1 = require("./unit_test");
var main_1 = require("./main");
(0, unit_test_1.describe)("getContentType", function () {
    var runCases = [
        {
            headers: {
                "Content-Type": "application/json",
                Authorization: "Bearer token123",
            },
            expected: "application/json",
        },
        {
            headers: { "Content-Type": "text/html", "Accept-Language": "en-US" },
            expected: "text/html",
        },
    ];
    var submitCases = runCases.concat([
        {
            headers: { Authorization: "Bearer token123" },
            expected: "",
        },
        {
            headers: {
                "Content-Type": "application/xml",
                "Cache-Control": "no-cache",
            },
            expected: "application/xml",
        },
    ]);
    var testCases = runCases;
    if (unit_test_1.withSubmit) {
        testCases = submitCases;
    }
    var _loop_1 = function (headers, expected) {
        (0, unit_test_1.it)("Content-Type is extracted for headers", function () {
            var response = new Response(null, { headers: headers });
            var actual = (0, main_1.getContentType)(response);
            unit_test_1.assert.strictEqual(actual, expected);
        });
    };
    for (var _i = 0, testCases_1 = testCases; _i < testCases_1.length; _i++) {
        var _a = testCases_1[_i], headers = _a.headers, expected = _a.expected;
        _loop_1(headers, expected);
    }
    var numSkipped = submitCases.length - testCases.length;
    if (numSkipped > 0) {
        console.log("- Skip: ".concat(numSkipped, " test case(s) for submit"));
    }
});
