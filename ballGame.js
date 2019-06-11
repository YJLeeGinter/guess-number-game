var list = [0,1,2,3,4,5,6,7,8,9];
var number = [];
for (var i = 0; i < 4; i++) {
  var select = Math.floor(Math.random() * list.length);
  number[i] = list.splice(select, 1)[0];
}
var count = 1;
var strike = 0;
var ball = 0;
while (count <= 10) {
  var input = prompt('Enter 4 digits');
  if(input === null) break;
    
  var inputArray = input.split('');
  
  for(var m=0; m < number.length-1; m++){
      for(var n=1; n < (number.length)-m; n++){
          if(Number(inputArray[m]) === Number(inputArray[m+n])){
              console.error('You repeated the same digits!');
              break;
          }
      }
  } 

 strike = 0;
 ball = 0;
 count++;
 for (var j = 0; j < 4; j++) {
   for (var k = 0; k < 4; k++) {
     if (number[j] == inputArray[k]) {
       if (j === k) {
         strike++;
       } else {
         ball++;
       }
       break;
     }
   }
 }
 if (strike === 4) {
   console.log('홈런!!! ' + (count - 1) + '번 만에 맞추셨습니다');
   break;
 } else if (count >10) {
   console.error('You tried more than 10 times');
 } else {
   console.info('The number of try: '+ (count-1) + ' input digits: '+ inputArray.join('') + ', ' + strike + ' strike, '  + ball + ' ball');
 }
  
}
console.log('Game Over!');