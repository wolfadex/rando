const rando = () => Math.random();

export default rando;

export const randoRange = (a, b) => {
  let min;
  let max;

  if (b == null) {
    min = 0;
    max = a;
  } else {
    min = a;
    max = b;
  }

  return rando() * (max - min) + min;
}

export const randoRangeInt = (a, b) => {
  let min;
  let max;

  if (b == null) {
    min = 0;
    max = a;
  } else {
    min = a;
    max = b;
  }

  return Math.floor(rando() * (max - min + 1)) + min;
}
