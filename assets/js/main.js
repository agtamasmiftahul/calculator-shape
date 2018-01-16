var basic = document.querySelector('#basic');

var squareAreaButton = document.querySelector('#square-area-button');
var squarePerimeterButton = document.querySelector('#square-perimeter-button');
var circleAreaButton = document.querySelector('#circle-area-button');
var circleCircumferenceButton = document.querySelector('#circle-circumference-button');
var cubeSurfaceAreaButton = document.querySelector('#cube-surface-button');
var cubeVolumeButton = document.querySelector('#cube-volume-button');

var result;
var messageToast;
var duration;

function showToast(messageToast, duration) {
  Materialize.toast(messageToast, duration);
}

function add(firstNumber, secondNumber) {
  result = firstNumber + secondNumber;
  return result;
}

function substract(firstNumber, secondNumber) {
  result = firstNumber - secondNumber;
  return result;
}

function multiply(firstNumber, secondNumber) {
  result = firstNumber * secondNumber;
  return result;
}

function divide(firstNumber, secondNumber) {
  result = firstNumber / secondNumber;
  return result;
}

function remainder(firstNumber, secondNumber) {
  result = firstNumber % secondNumber;
  return result;
}

function calculateSquareArea(length) {
  result = Math.pow(length, 2);
  return result;
}

function calculateSquarePerimeter(length) {
  result = length * 4;
  return result;
}

function calculateCircleArea(radius) {
  result = Math.PI * Math.pow(radius, 2);
  return result;
}

function calculateCircleCircumference(radius) {
  result = 2 * Math.PI * radius;
  return result;
}

function calculateCubeSurfaceArea(length) {
  result = 6 * Math.pow(length, 2);
  return result;
}

function calculateCubeVolume(length) {
  result = Math.pow(length, 3);
  return result;
}

function showSquareArea() {
  var length = basic.value;
  if (isNaN(length) !== true) {
    if (length > 0) {
      length = Number(length);
      calculateSquareArea(length);
      showToast(`The length is ${length}. Square area is ${result}`, 1000);
    } else {
      showToast(`Please, input a valid number`, 1000);
    }
  } else {
    showToast(`Please, input a number`, 1000);
  }
}

function showSquarePerimeter() {
  var length = basic.value;
  if (isNaN(length) !== true) {
    if (length > 0) {
      length = Number(length);
      calculateSquarePerimeter(length);
      showToast(`The length is ${length}. Square perimeter is ${result}`, 1000);
    } else {
      showToast(`Please, input a valid number`, 1000);
    }
  } else {
    showToast(`Please, input a number`, 1000);
  }
}

function showCircleArea() {
  var radius = basic.value;
  if (isNaN(radius) !== true) {
    if (radius > 0) {
      radius = Number(radius);
      calculateCircleArea(radius);
      showToast(`The radius is ${radius}. Circle area is ${result}`, 1000);
    } else {
      showToast(`Please, input a valid number`, 1000);
    }
  } else {
    showToast(`Please, input a number`, 1000);
  }
}

function showCircleCircumference() {
  var radius = basic.value;
  if (isNaN(radius) !== true) {
    if (radius > 0) {
      radius = Number(radius);
      calculateCircleCircumference(radius);
      showToast(`The radius is ${radius}. Circle circumference is ${result}`, 1000);
    } else {
      showToast(`Please, input a valid number`, 1000);
    }
  } else {
    showToast(`Please, input a number`, 1000);
  }
}

function showCubeSurfaceArea() {
  var length = basic.value;
  if (isNaN(length) !== true) {
    if (length > 0) {
      length = Number(length);
      calculateCubeSurfaceArea(length);
      showToast(`The length is ${length}. Cube surface area is ${result}`, 1000);
    } else {
      showToast(`Please, input a valid number`, 1000);
    }
  } else {
    showToast(`Please, input a number`, 1000);
  }
}

function showCubeVolume() {
  var length = basic.value;
  if (isNaN(length) !== true) {
    if (length > 0) {
      length = Number(length);
      calculateCubeVolume(length);
      showToast(`The length is ${length}. Cube volume is ${result}`, 1000);
    } else {
      showToast(`Please, input a valid number`, 1000);
    }
  } else {
    showToast(`Please, input a number`, 1000);
  }
}

squareAreaButton.addEventListener(`click`, showSquareArea);
squarePerimeterButton.addEventListener(`click`, showSquarePerimeter);
circleAreaButton.addEventListener(`click`, showCircleArea);
circleCircumferenceButton.addEventListener(`click`, showCircleCircumference);
cubeSurfaceAreaButton.addEventListener(`click`, showCubeSurfaceArea);
cubeVolumeButton.addEventListener(`click`, showCubeVolume);