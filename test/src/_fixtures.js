export const repr = (x) => JSON.stringify(x);
export const rel = (z) => (z === 0 ? '=' : z < 0 ? '<' : '>');
