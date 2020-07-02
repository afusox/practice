'use strict'; 

// 3の倍数にときにアホになるカウント
for (let i = 1; i <= 10; i++){
  switch(true){
    case i === 3:
      console.log('さぁん');
      continue;
      break;

    case i === 6:
      console.log('ろぉく!');
      continue;
      break;

    case i === 9:
      console.log('キュウ!');
      continue;
      break;

  }
  console.log(i);
}