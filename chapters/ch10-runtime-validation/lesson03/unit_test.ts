// unit_test.ts

export const withSubmit = true; // toggle manually if needed

export const assert = {
  strictEqual(a: any, b: any) {
    if (a !== b) {
      throw new Error(`Assertion failed: ${a} !== ${b}`);
    }
  },

  throws(fn: () => any) {
    let threw = false;
    try {
      fn();
    } catch {
      threw = true;
    }
    if (!threw) {
      throw new Error("Assertion failed: function did not throw");
    }
  }
};

export async function describe(name: string, fn: () => Promise<void> | void) {
  console.log(`\n=== ${name} ===`);
  await fn();
}

export async function it(name: string, fn: () => Promise<void> | void) {
  try {
    await fn();
    console.log("✔", name);
  } catch (err: any) {
    console.error("✘", name);
    console.error("  →", err.message);
  }
}
