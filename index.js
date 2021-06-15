function makeLine(size){
  let line = '';
  for (let i = 0; i < size; i++){
    line += '#';
  }
  return line; 
}
console.log(makeLine(5));

function makeSquare(size, size){
  let square = '';
  for (let i = 0; i < size; i++){
    square += (makeLine(size) + '\n');
  }
  return square;
}
console.log(makeSquare(3, 3));

function makeRectangle(width, height){
  let rectangle = '';
  for (let i = 0; i < height; i ++){
    rectangle += (makeLine(width) + '\n')
  }
  return rectangle;
}
console.log(makeRectangle(5,9))

function  makeDownwardStairs(height){
  let downwardStairs = '';
  for (let i =0; i < height; i++){
    downwardStairs += makeLine(i + 1) + '\n';
  }
  return downwardStairs;
}
console.log(makeDownwardStairs(5));

function makeSpace(spaceNum){
  let spaces = ''
  for (let i = 0; i < spaceNum; i ++){
    spaces += ' ';
  }
  return spaces;
}

function makeChar(charNum){
  let chars = '';
  for (let i = 0; i < charNum; i ++){
    chars += '#';
  }
  return chars;
}

function makeLineSpace(spaceNum, charNum){
  return makeSpace(spaceNum) + makeChar(charNum) + makeSpace(spaceNum)
}
console.log(makeLineSpace(5, 3));

function makeIsoscelesTriangle(height) {
   let triangle = '';
   for (let i = 0; i < height; i++) {
      triangle += (makeLineSpace(height - i - 1, 2*i + 1) + '\n');
   }
   return triangle.slice(0, -1);
}
console.log(makeIsoscelesTriangle(5));