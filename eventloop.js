function a() {
  console.log("first");
}

function b() {
  console.log("second");
}

function c() {
  setTimeout(() => console.log("third"), 0);
}

function d() {
  setTimeout(() => console.log("fourth"), 100);
}

b()
d()
a()
c()