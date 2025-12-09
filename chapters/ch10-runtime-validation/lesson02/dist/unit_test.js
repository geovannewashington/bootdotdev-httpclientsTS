// unit_test.ts
export const withSubmit = true; // toggle manually if needed
export const assert = {
    strictEqual(a, b) {
        if (a !== b) {
            throw new Error(`Assertion failed: ${a} !== ${b}`);
        }
    },
    throws(fn) {
        let threw = false;
        try {
            fn();
        }
        catch (_a) {
            threw = true;
        }
        if (!threw) {
            throw new Error("Assertion failed: function did not throw");
        }
    }
};
export async function describe(name, fn) {
    console.log(`\n=== ${name} ===`);
    await fn();
}
export async function it(name, fn) {
    try {
        await fn();
        console.log("✔", name);
    }
    catch (err) {
        console.error("✘", name);
        console.error("  →", err.message);
    }
}
