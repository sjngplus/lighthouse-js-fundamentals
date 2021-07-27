const calculateRectangleArea = function (length, width) {
  if (length < 0 || width < 0){
    return;
  }
  let area = length * width;
  return area;
}


const calculateTriangleArea = function (base, height) {
  if (base < 0 || height < 0){
    return;
  }
  let area = base * height / 2;
  return area;
}


const calculateCircleArea = function (radius) {
  if (radius < 0){
    return;
  }
  let area = radius**2 * Math.PI;
  return area;
}




console.log(calculateRectangleArea(5,6));

console.log(calculateTriangleArea(5,6));

console.log(calculateCircleArea(10));
