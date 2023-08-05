console.log('first task');
console.time();
var a = 0;
for (let i = 0; i < 100000000; i++) {
  a++;
}
console.timeEnd();
console.log('next task');
