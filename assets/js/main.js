var basic = document.querySelector('#basic');
var advancedA = document.querySelector('#advanced-a');
var advancedB = document.querySelector('#advanced-b');
var advancedC = document.querySelector('#advanced-c');

var squareAreaButton = document.querySelector('#square-area-button');
var squarePerimeterButton = document.querySelector('#square-perimeter-button');
var circleAreaButton = document.querySelector('#circle-area-button');
var circleCircumferenceButton = document.querySelector('#circle-circumference-button');
var cubeSurfaceAreaButton = document.querySelector('#cube-surface-button');
var cubeVolumeButton = document.querySelector('#cube-volume-button');
var cubeVolumeButtonAdvanced = document.querySelector('#cube-volume-button-advanced');
var circleAreaButtonAdvanced = document.querySelector('#circle-area-button-advanced');

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

function showAdvancedCubeVolume() {
  var firstNumber = advancedB.value;
  var secondNumber = advancedC.value;
  if (isNaN(firstNumber) !== true && isNaN(secondNumber) !== true) {
    firstNumber = Number(firstNumber);
    secondNumber = Number(secondNumber);
    calculateCubeVolume(add(firstNumber, secondNumber));
    showToast(`Your first number is ${firstNumber}. Your second number is ${secondNumber}. Cube volume is ${result}`, 1000);
  } else if (isNaN(firstNumber) !== true && isNaN(secondNumber) === true) {
    showToast('Your first input is a number, but your second input is not a number. Please, input a number', 1000);
  } else if (isNaN(firstNumber) === true && isNaN(secondNumber) !== true) {
    showToast('Your second input is a number, but your first input is not a number. Please, input a number', 1000);
  } else {
    showToast('Please, input a number', 1000);
  }
}

function showAdvancedCircleArea() {
  var firstNumber = advancedB.value;
  var secondNumber = advancedC.value;
  if (isNaN(firstNumber) !== true && isNaN(secondNumber) !== true) {
    firstNumber = Number(firstNumber);
    secondNumber = Number(secondNumber);
    if (firstNumber > secondNumber) {
      calculateCircleArea(substract(firstNumber, secondNumber));
      showToast(`Your first number is ${firstNumber}. Your second number is ${secondNumber}. Circle area is ${result}`, 1000);
    } else {
      showToast(`Please, input first number greater than second number`, 2000);
    }
  } else if (isNaN(firstNumber) !== true && isNaN(secondNumber) === true) {
    showToast('Your first input is a number, but your second input is not a number. Please, input a number', 1000);
  } else if (isNaN(firstNumber) === true && isNaN(secondNumber) !== true) {
    showToast('Your second input is a number, but your first input is not a number. Please, input a number', 1000);
  } else {
    showToast('Please, input a number', 1000);
  }
}

squareAreaButton.addEventListener(`click`, showSquareArea);
squarePerimeterButton.addEventListener(`click`, showSquarePerimeter);
circleAreaButton.addEventListener(`click`, showCircleArea);
circleCircumferenceButton.addEventListener(`click`, showCircleCircumference);
cubeSurfaceAreaButton.addEventListener(`click`, showCubeSurfaceArea);
cubeVolumeButton.addEventListener(`click`, showCubeVolume);

cubeVolumeButtonAdvanced.addEventListener(`click`, showAdvancedCubeVolume);
circleAreaButtonAdvanced.addEventListener(`click`, showAdvancedCircleArea);