try {
    printUserExperience(4);
    printUserExperience(10);
    printUserExperience(200);
} catch (err: unknown) {
    if (err instanceof Error) {
        console.log(`${err}`);
    } else {
        console.log(`An unknown error occured`);
    }
}

// don't touch below this line

function printUserExperience(level: number) {
  if (level < 1 || level > 100) {
    throw new Error("Experience level must be between 1 and 100!");
  }
  console.log(`The user has ${level} years of experience!`);
}
