function recursive(n){
  if(n === -1) {
    return 0;
  }

  let ans = 1 + recursive(n - 1)
  return ans
}

console.log(recursive(3))