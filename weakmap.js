let one = {
  num: 1
};

let two = {
  num: 2
};

const mp = new Map();
const weakMp = new WeakMap();
mp.set(one, 1);
mp.set(two, 2);

weakMp.set(one, 1);
weakMp.set(two, 2);

console.log("before delete", mp);
console.log("before delete", weakMp);

one = null;
two = null;

console.log("after delete", mp);
console.log("after delete", weakMp);
