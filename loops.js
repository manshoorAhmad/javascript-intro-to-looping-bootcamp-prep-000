var array = [];

function forLoop(array){
  for(let i=0; i<25; i++){
    ((i===0) ? array.push("I am 1 strange loop") : array.push(`"I am ${i} strange loops."`) )
  }
  return array;
};


 function whileLoop(n){
  while(n>0){
    console.log(--n);
  }
  return 'done';
};

function doWhileLoop(array){
  function maybeTrue() {
    return Math.random() >= 0.5
  }

  do {
      array.pop();
    } while (array.length > 0 && maybeTrue());
  return array;
}
