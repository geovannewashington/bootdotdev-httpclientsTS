// unit_test.ts
// Minimal compatible test harness for Boot.dev local use.

export const withSubmit = true; 
// Set to true if you want to include submit-only tests.

export const assert = {
  strictEqual(actual: unknown, expected: unknown) {
    if (actual !== expected) {
      throw new Error(`Expected "${actual}" to strictly equal "${expected}"`);
    }
  },

  deepStrictEqual(actual: unknown, expected: unknown) {
    const a = JSON.stringify(actual);
    const b = JSON.stringify(expected);
    if (a !== b) {
      throw new Error(`Expected deep equality:\nActual:   ${a}\nExpected: ${b}`);
    }
  }
};

export function describe(name: string, fn: () => void) {
  console.log(`\n${name}`);
  fn();
}

export function it(name: string, fn: () => void) {
  try {
    fn();
    console.log(`  ✓ ${name}`);
  } catch (err) {
    console.error(`  ✗ ${name}`);
    if (err instanceof Error) {
      console.error(`    ${err.message}`);
    } else {
      console.error("    Unknown error");
    }
  }
}
