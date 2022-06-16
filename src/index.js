// complete the function
function prime (num) {
  // code goes here
  for (var i = 2; i < num; i++){
    if (num % 2 ==0){
      return `${num} not a prime number`
    }
  }
  return `${num} is a prime number`
  } 


function solution (arg) {
  return prime(arg);
}

if (typeof require !== "undefined" && require.main === module) {
  if (process.argv.length <= 2) {
    throw Error("Require argument");
  }

  const arg = process.argv[2];
  console.log(solution(arg));
}

module.exports = { solution };
