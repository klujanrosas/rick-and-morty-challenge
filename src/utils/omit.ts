export function omit<O extends object, K extends keyof O>(
  obj: O,
  remove: K[]
): Omit<O, K> {
  const clone = { ...obj };
  for (const key of remove) {
    delete clone[key];
  }
  return clone;
}

let x = omit({ a: 1, b: 2 }, ["a"]);

type X = typeof x;
